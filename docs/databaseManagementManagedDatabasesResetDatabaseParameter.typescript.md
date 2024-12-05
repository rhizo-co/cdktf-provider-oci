# `databaseManagementManagedDatabasesResetDatabaseParameter` Submodule <a name="`databaseManagementManagedDatabasesResetDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameter <a name="DatabaseManagementManagedDatabasesResetDatabaseParameter" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter oci_database_management_managed_databases_reset_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter(scope: Construct, id: string, config: DatabaseManagementManagedDatabasesResetDatabaseParameterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig">DatabaseManagementManagedDatabasesResetDatabaseParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig">DatabaseManagementManagedDatabasesResetDatabaseParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential">putDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetDatabaseCredential">resetDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials"></a>

```typescript
public putCredentials(value: DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---

##### `putDatabaseCredential` <a name="putDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential"></a>

```typescript
public putDatabaseCredential(value: DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putDatabaseCredential.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

---

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseCredential` <a name="resetDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetDatabaseCredential"></a>

```typescript
public resetDatabaseCredential(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabasesResetDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabasesResetDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementManagedDatabasesResetDatabaseParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementManagedDatabasesResetDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabasesResetDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredentialInput">databaseCredentialInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parametersInput">parametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parameters">parameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentials"></a>

```typescript
public readonly credentials: DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference</a>

---

##### `databaseCredential`<sup>Required</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredential"></a>

```typescript
public readonly databaseCredential: DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---

##### `databaseCredentialInput`<sup>Optional</sup> <a name="databaseCredentialInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.databaseCredentialInput"></a>

```typescript
public readonly databaseCredentialInput: DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parametersInput"></a>

```typescript
public readonly parametersInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.parameters"></a>

```typescript
public readonly parameters: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameterConfig <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesResetDatabaseParameterConfig: databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#managed_database_id DatabaseManagementManagedDatabasesResetDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.parameters">parameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#parameters DatabaseManagementManagedDatabasesResetDatabaseParameter#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#scope DatabaseManagementManagedDatabasesResetDatabaseParameter#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | database_credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#id DatabaseManagementManagedDatabasesResetDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#managed_database_id DatabaseManagementManagedDatabasesResetDatabaseParameter#managed_database_id}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.parameters"></a>

```typescript
public readonly parameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#parameters DatabaseManagementManagedDatabasesResetDatabaseParameter#parameters}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#scope DatabaseManagementManagedDatabasesResetDatabaseParameter#scope}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.credentials"></a>

```typescript
public readonly credentials: DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credentials DatabaseManagementManagedDatabasesResetDatabaseParameter#credentials}

---

##### `databaseCredential`<sup>Optional</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.databaseCredential"></a>

```typescript
public readonly databaseCredential: DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

database_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#database_credential DatabaseManagementManagedDatabasesResetDatabaseParameter#database_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#id DatabaseManagementManagedDatabasesResetDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#timeouts DatabaseManagementManagedDatabasesResetDatabaseParameter#timeouts}

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesResetDatabaseParameterCredentials: databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#user_name DatabaseManagementManagedDatabasesResetDatabaseParameter#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#secret_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#user_name DatabaseManagementManagedDatabasesResetDatabaseParameter#user_name}.

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential: databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credential_type DatabaseManagementManagedDatabasesResetDatabaseParameter#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#named_credential_id DatabaseManagementManagedDatabasesResetDatabaseParameter#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password_secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#username DatabaseManagementManagedDatabasesResetDatabaseParameter#username}. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#credential_type DatabaseManagementManagedDatabasesResetDatabaseParameter#credential_type}.

---

##### `namedCredentialId`<sup>Optional</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#named_credential_id DatabaseManagementManagedDatabasesResetDatabaseParameter#named_credential_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password DatabaseManagementManagedDatabasesResetDatabaseParameter#password}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#password_secret_id DatabaseManagementManagedDatabasesResetDatabaseParameter#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#role DatabaseManagementManagedDatabasesResetDatabaseParameter#role}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#username DatabaseManagementManagedDatabasesResetDatabaseParameter#username}.

---

### DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

const databaseManagementManagedDatabasesResetDatabaseParameterTimeouts: databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#create DatabaseManagementManagedDatabasesResetDatabaseParameter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#delete DatabaseManagementManagedDatabasesResetDatabaseParameter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#update DatabaseManagementManagedDatabasesResetDatabaseParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#create DatabaseManagementManagedDatabasesResetDatabaseParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#delete DatabaseManagementManagedDatabasesResetDatabaseParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_reset_database_parameter#update DatabaseManagementManagedDatabasesResetDatabaseParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials">DatabaseManagementManagedDatabasesResetDatabaseParameterCredentials</a>

---


### DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId">resetNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamedCredentialId` <a name="resetNamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId"></a>

```typescript
public resetNamedCredentialId(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput">namedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `namedCredentialIdInput`<sup>Optional</sup> <a name="namedCredentialIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput"></a>

```typescript
public readonly namedCredentialIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesResetDatabaseParameterDatabaseCredential</a>

---


### DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference <a name="DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementManagedDatabasesResetDatabaseParameter } from 'rhizo-co-terraform-provider-oci'

new databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesResetDatabaseParameter.DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesResetDatabaseParameterTimeouts</a>

---



