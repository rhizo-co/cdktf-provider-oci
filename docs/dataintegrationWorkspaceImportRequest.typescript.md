# `dataintegrationWorkspaceImportRequest` Submodule <a name="`dataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceImportRequest <a name="DataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest(scope: Construct, id: string, config: DataintegrationWorkspaceImportRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig">DataintegrationWorkspaceImportRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig">DataintegrationWorkspaceImportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution">putImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded">resetAreDataAssetReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution">resetImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport">resetObjectKeyForImport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion">resetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId">resetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportConflictResolution` <a name="putImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution"></a>

```typescript
public putImportConflictResolution(value: DataintegrationWorkspaceImportRequestImportConflictResolution): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: DataintegrationWorkspaceImportRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---

##### `resetAreDataAssetReferencesIncluded` <a name="resetAreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded"></a>

```typescript
public resetAreDataAssetReferencesIncluded(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportConflictResolution` <a name="resetImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution"></a>

```typescript
public resetImportConflictResolution(): void
```

##### `resetObjectKeyForImport` <a name="resetObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport"></a>

```typescript
public resetObjectKeyForImport(): void
```

##### `resetObjectStorageRegion` <a name="resetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion"></a>

```typescript
public resetObjectStorageRegion(): void
```

##### `resetObjectStorageTenancyId` <a name="resetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId"></a>

```typescript
public resetObjectStorageTenancyId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceImportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages">errorMessages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects">importedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">totalImportedObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput">areDataAssetReferencesIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput">importConflictResolutionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput">objectKeyForImportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput">objectStorageRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput">objectStorageTenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport">objectKeyForImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion">objectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```typescript
public readonly errorMessages: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `importConflictResolution`<sup>Required</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```typescript
public readonly importConflictResolution: DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a>

---

##### `importedObjects`<sup>Required</sup> <a name="importedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```typescript
public readonly importedObjects: DataintegrationWorkspaceImportRequestImportedObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```typescript
public readonly timeEndedInMillis: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceImportRequestTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a>

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```typescript
public readonly timeStartedInMillis: string;
```

- *Type:* string

---

##### `totalImportedObjectCount`<sup>Required</sup> <a name="totalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```typescript
public readonly totalImportedObjectCount: number;
```

- *Type:* number

---

##### `areDataAssetReferencesIncludedInput`<sup>Optional</sup> <a name="areDataAssetReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput"></a>

```typescript
public readonly areDataAssetReferencesIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importConflictResolutionInput`<sup>Optional</sup> <a name="importConflictResolutionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput"></a>

```typescript
public readonly importConflictResolutionInput: DataintegrationWorkspaceImportRequestImportConflictResolution;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `objectKeyForImportInput`<sup>Optional</sup> <a name="objectKeyForImportInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput"></a>

```typescript
public readonly objectKeyForImportInput: string;
```

- *Type:* string

---

##### `objectStorageRegionInput`<sup>Optional</sup> <a name="objectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput"></a>

```typescript
public readonly objectStorageRegionInput: string;
```

- *Type:* string

---

##### `objectStorageTenancyIdInput`<sup>Optional</sup> <a name="objectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput"></a>

```typescript
public readonly objectStorageTenancyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataintegrationWorkspaceImportRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `areDataAssetReferencesIncluded`<sup>Required</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```typescript
public readonly areDataAssetReferencesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectKeyForImport`<sup>Required</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```typescript
public readonly objectKeyForImport: string;
```

- *Type:* string

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```typescript
public readonly objectStorageRegion: string;
```

- *Type:* string

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```typescript
public readonly objectStorageTenancyId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceImportRequestConfig <a name="DataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceImportRequestConfig: dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName">fileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | import_conflict_resolution block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport">objectKeyForImport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion">objectStorageRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}.

---

##### `areDataAssetReferencesIncluded`<sup>Optional</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded"></a>

```typescript
public readonly areDataAssetReferencesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importConflictResolution`<sup>Optional</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution"></a>

```typescript
public readonly importConflictResolution: DataintegrationWorkspaceImportRequestImportConflictResolution;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

import_conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution DataintegrationWorkspaceImportRequest#import_conflict_resolution}

---

##### `objectKeyForImport`<sup>Optional</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport"></a>

```typescript
public readonly objectKeyForImport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion"></a>

```typescript
public readonly objectStorageRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId"></a>

```typescript
public readonly objectStorageTenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceImportRequestTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#timeouts DataintegrationWorkspaceImportRequest#timeouts}

---

### DataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceImportRequestImportConflictResolution: dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType">importConflictResolutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix">duplicatePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix">duplicateSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}. |

---

##### `importConflictResolutionType`<sup>Required</sup> <a name="importConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType"></a>

```typescript
public readonly importConflictResolutionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}.

---

##### `duplicatePrefix`<sup>Optional</sup> <a name="duplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix"></a>

```typescript
public readonly duplicatePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}.

---

##### `duplicateSuffix`<sup>Optional</sup> <a name="duplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix"></a>

```typescript
public readonly duplicateSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}.

---

### DataintegrationWorkspaceImportRequestImportedObjects <a name="DataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceImportRequestImportedObjects: dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects = { ... }
```


### DataintegrationWorkspaceImportRequestTimeouts <a name="DataintegrationWorkspaceImportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceImportRequestTimeouts: dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix">resetDuplicatePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix">resetDuplicateSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuplicatePrefix` <a name="resetDuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix"></a>

```typescript
public resetDuplicatePrefix(): void
```

##### `resetDuplicateSuffix` <a name="resetDuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix"></a>

```typescript
public resetDuplicateSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput">duplicatePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput">duplicateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput">importConflictResolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">duplicatePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">duplicateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">importConflictResolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duplicatePrefixInput`<sup>Optional</sup> <a name="duplicatePrefixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput"></a>

```typescript
public readonly duplicatePrefixInput: string;
```

- *Type:* string

---

##### `duplicateSuffixInput`<sup>Optional</sup> <a name="duplicateSuffixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput"></a>

```typescript
public readonly duplicateSuffixInput: string;
```

- *Type:* string

---

##### `importConflictResolutionTypeInput`<sup>Optional</sup> <a name="importConflictResolutionTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput"></a>

```typescript
public readonly importConflictResolutionTypeInput: string;
```

- *Type:* string

---

##### `duplicatePrefix`<sup>Required</sup> <a name="duplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```typescript
public readonly duplicatePrefix: string;
```

- *Type:* string

---

##### `duplicateSuffix`<sup>Required</sup> <a name="duplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```typescript
public readonly duplicateSuffix: string;
```

- *Type:* string

---

##### `importConflictResolutionType`<sup>Required</sup> <a name="importConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```typescript
public readonly importConflictResolutionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceImportRequestImportConflictResolution;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceImportRequestImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">namePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">newKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">oldKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">resolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```typescript
public readonly namePath: string;
```

- *Type:* string

---

##### `newKey`<sup>Required</sup> <a name="newKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```typescript
public readonly newKey: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `oldKey`<sup>Required</sup> <a name="oldKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```typescript
public readonly oldKey: string;
```

- *Type:* string

---

##### `resolutionAction`<sup>Required</sup> <a name="resolutionAction" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```typescript
public readonly resolutionAction: string;
```

- *Type:* string

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```typescript
public readonly timeUpdatedInMillis: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceImportRequestImportedObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a>

---


### DataintegrationWorkspaceImportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceImportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataintegrationWorkspaceImportRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---



