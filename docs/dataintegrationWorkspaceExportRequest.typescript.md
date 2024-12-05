# `dataintegrationWorkspaceExportRequest` Submodule <a name="`dataintegrationWorkspaceExportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceExportRequest <a name="DataintegrationWorkspaceExportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request oci_dataintegration_workspace_export_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest(scope: Construct, id: string, config: DataintegrationWorkspaceExportRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig">DataintegrationWorkspaceExportRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig">DataintegrationWorkspaceExportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded">resetAreReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled">resetIsObjectOverwriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys">resetObjectKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion">resetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId">resetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: DataintegrationWorkspaceExportRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---

##### `resetAreReferencesIncluded` <a name="resetAreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded"></a>

```typescript
public resetAreReferencesIncluded(): void
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName"></a>

```typescript
public resetFileName(): void
```

##### `resetFilters` <a name="resetFilters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsObjectOverwriteEnabled` <a name="resetIsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled"></a>

```typescript
public resetIsObjectOverwriteEnabled(): void
```

##### `resetObjectKeys` <a name="resetObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys"></a>

```typescript
public resetObjectKeys(): void
```

##### `resetObjectStorageRegion` <a name="resetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion"></a>

```typescript
public resetObjectStorageRegion(): void
```

##### `resetObjectStorageTenancyId` <a name="resetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId"></a>

```typescript
public resetObjectStorageTenancyId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceExportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceExportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceExportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages">errorMessages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems">exportedItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems">referencedItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount">totalExportedObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput">areReferencesIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput">filtersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput">isObjectOverwriteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput">objectKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput">objectStorageRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput">objectStorageTenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded">areReferencesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters">filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys">objectKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion">objectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages"></a>

```typescript
public readonly errorMessages: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `exportedItems`<sup>Required</sup> <a name="exportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems"></a>

```typescript
public readonly exportedItems: DataintegrationWorkspaceExportRequestExportedItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedItems`<sup>Required</sup> <a name="referencedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems"></a>

```typescript
public readonly referencedItems: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis"></a>

```typescript
public readonly timeEndedInMillis: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceExportRequestTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a>

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis"></a>

```typescript
public readonly timeStartedInMillis: string;
```

- *Type:* string

---

##### `totalExportedObjectCount`<sup>Required</sup> <a name="totalExportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount"></a>

```typescript
public readonly totalExportedObjectCount: number;
```

- *Type:* number

---

##### `areReferencesIncludedInput`<sup>Optional</sup> <a name="areReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput"></a>

```typescript
public readonly areReferencesIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput"></a>

```typescript
public readonly filtersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isObjectOverwriteEnabledInput`<sup>Optional</sup> <a name="isObjectOverwriteEnabledInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput"></a>

```typescript
public readonly isObjectOverwriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectKeysInput`<sup>Optional</sup> <a name="objectKeysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput"></a>

```typescript
public readonly objectKeysInput: string[];
```

- *Type:* string[]

---

##### `objectStorageRegionInput`<sup>Optional</sup> <a name="objectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput"></a>

```typescript
public readonly objectStorageRegionInput: string;
```

- *Type:* string

---

##### `objectStorageTenancyIdInput`<sup>Optional</sup> <a name="objectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput"></a>

```typescript
public readonly objectStorageTenancyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataintegrationWorkspaceExportRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `areReferencesIncluded`<sup>Required</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded"></a>

```typescript
public readonly areReferencesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isObjectOverwriteEnabled`<sup>Required</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled"></a>

```typescript
public readonly isObjectOverwriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectKeys`<sup>Required</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys"></a>

```typescript
public readonly objectKeys: string[];
```

- *Type:* string[]

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion"></a>

```typescript
public readonly objectStorageRegion: string;
```

- *Type:* string

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId"></a>

```typescript
public readonly objectStorageTenancyId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceExportRequestConfig <a name="DataintegrationWorkspaceExportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceExportRequestConfig: dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded">areReferencesIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName">fileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters">filters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys">objectKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion">objectStorageRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}.

---

##### `areReferencesIncluded`<sup>Optional</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded"></a>

```typescript
public readonly areReferencesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isObjectOverwriteEnabled`<sup>Optional</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled"></a>

```typescript
public readonly isObjectOverwriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}.

---

##### `objectKeys`<sup>Optional</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys"></a>

```typescript
public readonly objectKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion"></a>

```typescript
public readonly objectStorageRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId"></a>

```typescript
public readonly objectStorageTenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceExportRequestTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#timeouts DataintegrationWorkspaceExportRequest#timeouts}

---

### DataintegrationWorkspaceExportRequestExportedItems <a name="DataintegrationWorkspaceExportRequestExportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceExportRequestExportedItems: dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems = { ... }
```


### DataintegrationWorkspaceExportRequestTimeouts <a name="DataintegrationWorkspaceExportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceExportRequestTimeouts: dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceExportRequestExportedItemsList <a name="DataintegrationWorkspaceExportRequestExportedItemsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceExportRequestExportedItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceExportRequestExportedItemsOutputReference <a name="DataintegrationWorkspaceExportRequestExportedItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath">namePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath"></a>

```typescript
public readonly namePath: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis"></a>

```typescript
public readonly timeUpdatedInMillis: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceExportRequestExportedItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a>

---


### DataintegrationWorkspaceExportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceExportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceExportRequest } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataintegrationWorkspaceExportRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---



