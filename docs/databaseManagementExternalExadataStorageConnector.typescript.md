# `databaseManagementExternalExadataStorageConnector` Submodule <a name="`databaseManagementExternalExadataStorageConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataStorageConnector <a name="DatabaseManagementExternalExadataStorageConnector" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector oci_database_management_external_exadata_storage_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector(scope: Construct, id: string, config: DatabaseManagementExternalExadataStorageConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig">DatabaseManagementExternalExadataStorageConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig">DatabaseManagementExternalExadataStorageConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo">putCredentialInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentialInfo` <a name="putCredentialInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo"></a>

```typescript
public putCredentialInfo(value: DatabaseManagementExternalExadataStorageConnectorCredentialInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementExternalExadataStorageConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalExadataStorageConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalExadataStorageConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataStorageConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfo">credentialInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference">DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference">DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUriInput">connectionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorNameInput">connectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfoInput">credentialInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerIdInput">storageServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerId">storageServerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `credentialInfo`<sup>Required</sup> <a name="credentialInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfo"></a>

```typescript
public readonly credentialInfo: DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference">DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference">DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `connectionUriInput`<sup>Optional</sup> <a name="connectionUriInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUriInput"></a>

```typescript
public readonly connectionUriInput: string;
```

- *Type:* string

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorNameInput"></a>

```typescript
public readonly connectorNameInput: string;
```

- *Type:* string

---

##### `credentialInfoInput`<sup>Optional</sup> <a name="credentialInfoInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfoInput"></a>

```typescript
public readonly credentialInfoInput: DatabaseManagementExternalExadataStorageConnectorCredentialInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `storageServerIdInput`<sup>Optional</sup> <a name="storageServerIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerIdInput"></a>

```typescript
public readonly storageServerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementExternalExadataStorageConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageServerId`<sup>Required</sup> <a name="storageServerId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerId"></a>

```typescript
public readonly storageServerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataStorageConnectorConfig <a name="DatabaseManagementExternalExadataStorageConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageConnectorConfig: databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectionUri">connectionUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectorName">connectorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.credentialInfo">credentialInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | credential_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.storageServerId">storageServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}.

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}.

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}.

---

##### `credentialInfo`<sup>Required</sup> <a name="credentialInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.credentialInfo"></a>

```typescript
public readonly credentialInfo: DatabaseManagementExternalExadataStorageConnectorCredentialInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#credential_info DatabaseManagementExternalExadataStorageConnector#credential_info}

---

##### `storageServerId`<sup>Required</sup> <a name="storageServerId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.storageServerId"></a>

```typescript
public readonly storageServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataStorageConnectorTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#timeouts DatabaseManagementExternalExadataStorageConnector#timeouts}

---

### DatabaseManagementExternalExadataStorageConnectorCredentialInfo <a name="DatabaseManagementExternalExadataStorageConnectorCredentialInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageConnectorCredentialInfo: databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#password DatabaseManagementExternalExadataStorageConnector#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#username DatabaseManagementExternalExadataStorageConnector#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreLocation">sslTrustStoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_location DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStorePassword">sslTrustStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_password DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreType">sslTrustStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_type DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_type}. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#password DatabaseManagementExternalExadataStorageConnector#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#username DatabaseManagementExternalExadataStorageConnector#username}.

---

##### `sslTrustStoreLocation`<sup>Optional</sup> <a name="sslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreLocation"></a>

```typescript
public readonly sslTrustStoreLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_location DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_location}.

---

##### `sslTrustStorePassword`<sup>Optional</sup> <a name="sslTrustStorePassword" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStorePassword"></a>

```typescript
public readonly sslTrustStorePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_password DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_password}.

---

##### `sslTrustStoreType`<sup>Optional</sup> <a name="sslTrustStoreType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreType"></a>

```typescript
public readonly sslTrustStoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_type DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_type}.

---

### DatabaseManagementExternalExadataStorageConnectorTimeouts <a name="DatabaseManagementExternalExadataStorageConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageConnectorTimeouts: databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#create DatabaseManagementExternalExadataStorageConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#delete DatabaseManagementExternalExadataStorageConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#update DatabaseManagementExternalExadataStorageConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#create DatabaseManagementExternalExadataStorageConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#delete DatabaseManagementExternalExadataStorageConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#update DatabaseManagementExternalExadataStorageConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference <a name="DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreLocation">resetSslTrustStoreLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStorePassword">resetSslTrustStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreType">resetSslTrustStoreType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslTrustStoreLocation` <a name="resetSslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreLocation"></a>

```typescript
public resetSslTrustStoreLocation(): void
```

##### `resetSslTrustStorePassword` <a name="resetSslTrustStorePassword" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStorePassword"></a>

```typescript
public resetSslTrustStorePassword(): void
```

##### `resetSslTrustStoreType` <a name="resetSslTrustStoreType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreType"></a>

```typescript
public resetSslTrustStoreType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocationInput">sslTrustStoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePasswordInput">sslTrustStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreTypeInput">sslTrustStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation">sslTrustStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword">sslTrustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType">sslTrustStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `sslTrustStoreLocationInput`<sup>Optional</sup> <a name="sslTrustStoreLocationInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocationInput"></a>

```typescript
public readonly sslTrustStoreLocationInput: string;
```

- *Type:* string

---

##### `sslTrustStorePasswordInput`<sup>Optional</sup> <a name="sslTrustStorePasswordInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePasswordInput"></a>

```typescript
public readonly sslTrustStorePasswordInput: string;
```

- *Type:* string

---

##### `sslTrustStoreTypeInput`<sup>Optional</sup> <a name="sslTrustStoreTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreTypeInput"></a>

```typescript
public readonly sslTrustStoreTypeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sslTrustStoreLocation`<sup>Required</sup> <a name="sslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```typescript
public readonly sslTrustStoreLocation: string;
```

- *Type:* string

---

##### `sslTrustStorePassword`<sup>Required</sup> <a name="sslTrustStorePassword" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```typescript
public readonly sslTrustStorePassword: string;
```

- *Type:* string

---

##### `sslTrustStoreType`<sup>Required</sup> <a name="sslTrustStoreType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```typescript
public readonly sslTrustStoreType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementExternalExadataStorageConnectorCredentialInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---


### DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference <a name="DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageConnector } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementExternalExadataStorageConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

---



