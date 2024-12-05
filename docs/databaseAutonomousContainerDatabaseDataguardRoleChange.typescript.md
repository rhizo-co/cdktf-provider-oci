# `databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardRoleChange` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChange <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChange" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change oci_database_autonomous_container_database_dataguard_role_change}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig">DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig">DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType">resetConnectionStringsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---

##### `resetConnectionStringsType` <a name="resetConnectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetConnectionStringsType"></a>

```typescript
public resetConnectionStringsType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardRoleChange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousContainerDatabaseDataguardRoleChange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardRoleChange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput">autonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput">connectionStringsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType">connectionStringsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference</a>

---

##### `autonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationIdInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `connectionStringsTypeInput`<sup>Optional</sup> <a name="connectionStringsTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsTypeInput"></a>

```typescript
public readonly connectionStringsTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `connectionStringsType`<sup>Required</sup> <a name="connectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.connectionStringsType"></a>

```typescript
public readonly connectionStringsType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseDataguardRoleChangeConfig: databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId">autonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType">connectionStringsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="autonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```typescript
public readonly autonomousContainerDatabaseDataguardAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_dataguard_association_id}.

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardRoleChange#autonomous_container_database_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#role DatabaseAutonomousContainerDatabaseDataguardRoleChange#role}.

---

##### `connectionStringsType`<sup>Optional</sup> <a name="connectionStringsType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.connectionStringsType"></a>

```typescript
public readonly connectionStringsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#connection_strings_type DatabaseAutonomousContainerDatabaseDataguardRoleChange#connection_strings_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#id DatabaseAutonomousContainerDatabaseDataguardRoleChange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#timeouts DatabaseAutonomousContainerDatabaseDataguardRoleChange#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts: databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#create DatabaseAutonomousContainerDatabaseDataguardRoleChange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_role_change#delete DatabaseAutonomousContainerDatabaseDataguardRoleChange#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousContainerDatabaseDataguardRoleChange } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardRoleChange.DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts">DatabaseAutonomousContainerDatabaseDataguardRoleChangeTimeouts</a>

---



