# `databaseManagementManagedDatabasesChangeDatabaseParameter` Submodule <a name="`databaseManagementManagedDatabasesChangeDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameter <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameter" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter oci_database_management_managed_databases_change_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter(scope: Construct, id: string, config: DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig">DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig">DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential">putDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetDatabaseCredential">resetDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials"></a>

```typescript
public putCredentials(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

---

##### `putDatabaseCredential` <a name="putDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential"></a>

```typescript
public putDatabaseCredential(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

---

##### `putParameters` <a name="putParameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

---

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseCredential` <a name="resetDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetDatabaseCredential"></a>

```typescript
public resetDatabaseCredential(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabasesChangeDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabasesChangeDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementManagedDatabasesChangeDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList">DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredentialInput">databaseCredentialInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentials"></a>

```typescript
public readonly credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference</a>

---

##### `databaseCredential`<sup>Required</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredential"></a>

```typescript
public readonly databaseCredential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parameters"></a>

```typescript
public readonly parameters: DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList">DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

---

##### `databaseCredentialInput`<sup>Optional</sup> <a name="databaseCredentialInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredentialInput"></a>

```typescript
public readonly databaseCredentialInput: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesChangeDatabaseParameterConfig: databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | database_credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#parameters DatabaseManagementManagedDatabasesChangeDatabaseParameter#parameters}

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.credentials"></a>

```typescript
public readonly credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credentials DatabaseManagementManagedDatabasesChangeDatabaseParameter#credentials}

---

##### `databaseCredential`<sup>Optional</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.databaseCredential"></a>

```typescript
public readonly databaseCredential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

database_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#database_credential DatabaseManagementManagedDatabasesChangeDatabaseParameter#database_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#timeouts DatabaseManagementManagedDatabasesChangeDatabaseParameter#timeouts}

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesChangeDatabaseParameterCredentials: databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential: databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}.

---

##### `namedCredentialId`<sup>Optional</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesChangeDatabaseParameterParameters: databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#name DatabaseManagementManagedDatabasesChangeDatabaseParameter#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#value DatabaseManagementManagedDatabasesChangeDatabaseParameter#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.updateComment">updateComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update_comment DatabaseManagementManagedDatabasesChangeDatabaseParameter#update_comment}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#name DatabaseManagementManagedDatabasesChangeDatabaseParameter#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#value DatabaseManagementManagedDatabasesChangeDatabaseParameter#value}.

---

##### `updateComment`<sup>Optional</sup> <a name="updateComment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.updateComment"></a>

```typescript
public readonly updateComment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update_comment DatabaseManagementManagedDatabasesChangeDatabaseParameter#update_comment}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesChangeDatabaseParameterTimeouts: databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId">resetNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamedCredentialId` <a name="resetNamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId"></a>

```typescript
public resetNamedCredentialId(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput">namedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `namedCredentialIdInput`<sup>Optional</sup> <a name="namedCredentialIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput"></a>

```typescript
public readonly namedCredentialIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get"></a>

```typescript
public get(index: number): DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>[]

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resetUpdateComment">resetUpdateComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdateComment` <a name="resetUpdateComment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resetUpdateComment"></a>

```typescript
public resetUpdateComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateCommentInput">updateCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateComment">updateComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `updateCommentInput`<sup>Optional</sup> <a name="updateCommentInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateCommentInput"></a>

```typescript
public readonly updateCommentInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updateComment`<sup>Required</sup> <a name="updateComment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateComment"></a>

```typescript
public readonly updateComment: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesChangeDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

---



