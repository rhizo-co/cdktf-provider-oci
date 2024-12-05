# `databaseManagementDbManagementPrivateEndpoint` Submodule <a name="`databaseManagementDbManagementPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementDbManagementPrivateEndpoint <a name="DatabaseManagementDbManagementPrivateEndpoint" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint oci_database_management_db_management_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint(scope: Construct, id: string, config: DatabaseManagementDbManagementPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig">DatabaseManagementDbManagementPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig">DatabaseManagementDbManagementPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsCluster">resetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsDnsResolutionEnabled">resetIsDnsResolutionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementDbManagementPrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCluster` <a name="resetIsCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsCluster"></a>

```typescript
public resetIsCluster(): void
```

##### `resetIsDnsResolutionEnabled` <a name="resetIsDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetIsDnsResolutionEnabled"></a>

```typescript
public resetIsDnsResolutionEnabled(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementDbManagementPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementDbManagementPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementDbManagementPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementDbManagementPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference">DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isClusterInput">isClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabledInput">isDnsResolutionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference">DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference</a>

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isClusterInput`<sup>Optional</sup> <a name="isClusterInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isClusterInput"></a>

```typescript
public readonly isClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDnsResolutionEnabledInput`<sup>Optional</sup> <a name="isDnsResolutionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabledInput"></a>

```typescript
public readonly isDnsResolutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementDbManagementPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDnsResolutionEnabled`<sup>Required</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementDbManagementPrivateEndpointConfig <a name="DatabaseManagementDbManagementPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.Initializer"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseManagementDbManagementPrivateEndpointConfig: databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#compartment_id DatabaseManagementDbManagementPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#name DatabaseManagementDbManagementPrivateEndpoint#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#subnet_id DatabaseManagementDbManagementPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#defined_tags DatabaseManagementDbManagementPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#description DatabaseManagementDbManagementPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#freeform_tags DatabaseManagementDbManagementPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#id DatabaseManagementDbManagementPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_cluster DatabaseManagementDbManagementPrivateEndpoint#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_dns_resolution_enabled DatabaseManagementDbManagementPrivateEndpoint#is_dns_resolution_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#nsg_ids DatabaseManagementDbManagementPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#compartment_id DatabaseManagementDbManagementPrivateEndpoint#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#name DatabaseManagementDbManagementPrivateEndpoint#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#subnet_id DatabaseManagementDbManagementPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#defined_tags DatabaseManagementDbManagementPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#description DatabaseManagementDbManagementPrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#freeform_tags DatabaseManagementDbManagementPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#id DatabaseManagementDbManagementPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCluster`<sup>Optional</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_cluster DatabaseManagementDbManagementPrivateEndpoint#is_cluster}.

---

##### `isDnsResolutionEnabled`<sup>Optional</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#is_dns_resolution_enabled DatabaseManagementDbManagementPrivateEndpoint#is_dns_resolution_enabled}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#nsg_ids DatabaseManagementDbManagementPrivateEndpoint#nsg_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementDbManagementPrivateEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#timeouts DatabaseManagementDbManagementPrivateEndpoint#timeouts}

---

### DatabaseManagementDbManagementPrivateEndpointTimeouts <a name="DatabaseManagementDbManagementPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.Initializer"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const databaseManagementDbManagementPrivateEndpointTimeouts: databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#create DatabaseManagementDbManagementPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#delete DatabaseManagementDbManagementPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#update DatabaseManagementDbManagementPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#create DatabaseManagementDbManagementPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#delete DatabaseManagementDbManagementPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_db_management_private_endpoint#update DatabaseManagementDbManagementPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference <a name="DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementDbManagementPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementDbManagementPrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementDbManagementPrivateEndpoint.DatabaseManagementDbManagementPrivateEndpointTimeouts">DatabaseManagementDbManagementPrivateEndpointTimeouts</a>

---



