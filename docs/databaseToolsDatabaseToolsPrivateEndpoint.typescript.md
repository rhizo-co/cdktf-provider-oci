# `databaseToolsDatabaseToolsPrivateEndpoint` Submodule <a name="`databaseToolsDatabaseToolsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpoint <a name="DatabaseToolsDatabaseToolsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint oci_database_tools_database_tools_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint(scope: Construct, id: string, config: DatabaseToolsDatabaseToolsPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig">DatabaseToolsDatabaseToolsPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig">DatabaseToolsDatabaseToolsPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks"></a>

```typescript
public putLocks(value: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseToolsDatabaseToolsPrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseToolsDatabaseToolsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseToolsDatabaseToolsPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseToolsDatabaseToolsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseToolsDatabaseToolsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns">additionalFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn">endpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId">privateEndpointVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration">reverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId">endpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalFqdns`<sup>Required</sup> <a name="additionalFqdns" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.additionalFqdns"></a>

```typescript
public readonly additionalFqdns: string[];
```

- *Type:* string[]

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointFqdn"></a>

```typescript
public readonly endpointFqdn: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locks"></a>

```typescript
public readonly locks: DatabaseToolsDatabaseToolsPrivateEndpointLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList">DatabaseToolsDatabaseToolsPrivateEndpointLocksList</a>

---

##### `privateEndpointVnicId`<sup>Required</sup> <a name="privateEndpointVnicId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointVnicId"></a>

```typescript
public readonly privateEndpointVnicId: string;
```

- *Type:* string

---

##### `reverseConnectionConfiguration`<sup>Required</sup> <a name="reverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.reverseConnectionConfiguration"></a>

```typescript
public readonly reverseConnectionConfiguration: DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference">DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceIdInput"></a>

```typescript
public readonly endpointServiceIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.endpointServiceId"></a>

```typescript
public readonly endpointServiceId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointConfig <a name="DatabaseToolsDatabaseToolsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseToolsDatabaseToolsPrivateEndpointConfig: databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#compartment_id DatabaseToolsDatabaseToolsPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#display_name DatabaseToolsDatabaseToolsPrivateEndpoint#display_name}.

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.endpointServiceId"></a>

```typescript
public readonly endpointServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#endpoint_service_id DatabaseToolsDatabaseToolsPrivateEndpoint#endpoint_service_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#subnet_id DatabaseToolsDatabaseToolsPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#defined_tags DatabaseToolsDatabaseToolsPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#description DatabaseToolsDatabaseToolsPrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#freeform_tags DatabaseToolsDatabaseToolsPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#id DatabaseToolsDatabaseToolsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#locks DatabaseToolsDatabaseToolsPrivateEndpoint#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#nsg_ids DatabaseToolsDatabaseToolsPrivateEndpoint#nsg_ids}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#private_endpoint_ip DatabaseToolsDatabaseToolsPrivateEndpoint#private_endpoint_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseToolsDatabaseToolsPrivateEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#timeouts DatabaseToolsDatabaseToolsPrivateEndpoint#timeouts}

---

### DatabaseToolsDatabaseToolsPrivateEndpointLocks <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseToolsDatabaseToolsPrivateEndpointLocks: databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated">timeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#type DatabaseToolsDatabaseToolsPrivateEndpoint#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#message DatabaseToolsDatabaseToolsPrivateEndpoint#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#related_resource_id DatabaseToolsDatabaseToolsPrivateEndpoint#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#time_created DatabaseToolsDatabaseToolsPrivateEndpoint#time_created}.

---

### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration: databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration = { ... }
```


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps: databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps = { ... }
```


### DatabaseToolsDatabaseToolsPrivateEndpointTimeouts <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseToolsDatabaseToolsPrivateEndpointTimeouts: databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#create DatabaseToolsDatabaseToolsPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#delete DatabaseToolsDatabaseToolsPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_private_endpoint#update DatabaseToolsDatabaseToolsPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseToolsDatabaseToolsPrivateEndpointLocksList <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get"></a>

```typescript
public get(index: number): DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>[]

---


### DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetRelatedResourceId"></a>

```typescript
public resetRelatedResourceId(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceIdInput"></a>

```typescript
public readonly relatedResourceIdInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointLocks">DatabaseToolsDatabaseToolsPrivateEndpointLocks</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get"></a>

```typescript
public get(index: number): DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">reverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reverseConnectionsSourceIps`<sup>Required</sup> <a name="reverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```typescript
public readonly reverseConnectionsSourceIps: DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfiguration</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```typescript
public get(index: number): DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps">DatabaseToolsDatabaseToolsPrivateEndpointReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference <a name="DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseToolsDatabaseToolsPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseToolsDatabaseToolsPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsPrivateEndpoint.DatabaseToolsDatabaseToolsPrivateEndpointTimeouts">DatabaseToolsDatabaseToolsPrivateEndpointTimeouts</a>

---



