# `dataintegrationWorkspaceFolder` Submodule <a name="`dataintegrationWorkspaceFolder` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceFolder <a name="DataintegrationWorkspaceFolder" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder oci_dataintegration_workspace_folder}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder(scope: Construct, id: string, config: DataintegrationWorkspaceFolderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig">DataintegrationWorkspaceFolderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig">DataintegrationWorkspaceFolderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putRegistryMetadata">putRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetCategoryName">resetCategoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetFolderKey">resetFolderKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetObjectStatus">resetObjectStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegistryMetadata` <a name="putRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putRegistryMetadata"></a>

```typescript
public putRegistryMetadata(value: DataintegrationWorkspaceFolderRegistryMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putRegistryMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putTimeouts"></a>

```typescript
public putTimeouts(value: DataintegrationWorkspaceFolderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a>

---

##### `resetCategoryName` <a name="resetCategoryName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetCategoryName"></a>

```typescript
public resetCategoryName(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolderKey` <a name="resetFolderKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetFolderKey"></a>

```typescript
public resetFolderKey(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetModelVersion` <a name="resetModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetModelVersion"></a>

```typescript
public resetModelVersion(): void
```

##### `resetObjectStatus` <a name="resetObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetObjectStatus"></a>

```typescript
public resetObjectStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceFolder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isConstruct"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformElement"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformResource"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceFolder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceFolder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceFolder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceFolder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.keyMap">keyMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList">DataintegrationWorkspaceFolderMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList">DataintegrationWorkspaceFolderParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference">DataintegrationWorkspaceFolderRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference">DataintegrationWorkspaceFolderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.categoryNameInput">categoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.folderKeyInput">folderKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectStatusInput">objectStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.registryMetadataInput">registryMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.categoryName">categoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.folderKey">folderKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectStatus">objectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyMap`<sup>Required</sup> <a name="keyMap" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.keyMap"></a>

```typescript
public readonly keyMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.metadata"></a>

```typescript
public readonly metadata: DataintegrationWorkspaceFolderMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList">DataintegrationWorkspaceFolderMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.parentRef"></a>

```typescript
public readonly parentRef: DataintegrationWorkspaceFolderParentRefList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList">DataintegrationWorkspaceFolderParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataintegrationWorkspaceFolderRegistryMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference">DataintegrationWorkspaceFolderRegistryMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceFolderTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference">DataintegrationWorkspaceFolderTimeoutsOutputReference</a>

---

##### `categoryNameInput`<sup>Optional</sup> <a name="categoryNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.categoryNameInput"></a>

```typescript
public readonly categoryNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderKeyInput`<sup>Optional</sup> <a name="folderKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.folderKeyInput"></a>

```typescript
public readonly folderKeyInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectStatusInput`<sup>Optional</sup> <a name="objectStatusInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectStatusInput"></a>

```typescript
public readonly objectStatusInput: number;
```

- *Type:* number

---

##### `registryMetadataInput`<sup>Optional</sup> <a name="registryMetadataInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.registryMetadataInput"></a>

```typescript
public readonly registryMetadataInput: DataintegrationWorkspaceFolderRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataintegrationWorkspaceFolderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folderKey`<sup>Required</sup> <a name="folderKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.folderKey"></a>

```typescript
public readonly folderKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceFolderConfig <a name="DataintegrationWorkspaceFolderConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderConfig: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#identifier DataintegrationWorkspaceFolder#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#name DataintegrationWorkspaceFolder#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#workspace_id DataintegrationWorkspaceFolder#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.categoryName">categoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#category_name DataintegrationWorkspaceFolder#category_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#description DataintegrationWorkspaceFolder#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.folderKey">folderKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#folder_key DataintegrationWorkspaceFolder#folder_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#id DataintegrationWorkspaceFolder#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#key DataintegrationWorkspaceFolder#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.modelVersion">modelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#model_version DataintegrationWorkspaceFolder#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.objectStatus">objectStatus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#object_status DataintegrationWorkspaceFolder#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#identifier DataintegrationWorkspaceFolder#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#name DataintegrationWorkspaceFolder#name}.

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataintegrationWorkspaceFolderRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#registry_metadata DataintegrationWorkspaceFolder#registry_metadata}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#workspace_id DataintegrationWorkspaceFolder#workspace_id}.

---

##### `categoryName`<sup>Optional</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#category_name DataintegrationWorkspaceFolder#category_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#description DataintegrationWorkspaceFolder#description}.

---

##### `folderKey`<sup>Optional</sup> <a name="folderKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.folderKey"></a>

```typescript
public readonly folderKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#folder_key DataintegrationWorkspaceFolder#folder_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#id DataintegrationWorkspaceFolder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#key DataintegrationWorkspaceFolder#key}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#model_version DataintegrationWorkspaceFolder#model_version}.

---

##### `objectStatus`<sup>Optional</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#object_status DataintegrationWorkspaceFolder#object_status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceFolderTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#timeouts DataintegrationWorkspaceFolder#timeouts}

---

### DataintegrationWorkspaceFolderMetadata <a name="DataintegrationWorkspaceFolderMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadata.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderMetadata: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadata = { ... }
```


### DataintegrationWorkspaceFolderMetadataAggregator <a name="DataintegrationWorkspaceFolderMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregator.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderMetadataAggregator: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregator = { ... }
```


### DataintegrationWorkspaceFolderMetadataCountStatistics <a name="DataintegrationWorkspaceFolderMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatistics.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderMetadataCountStatistics: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatistics = { ... }
```


### DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct = { ... }
```


### DataintegrationWorkspaceFolderParentRef <a name="DataintegrationWorkspaceFolderParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRef.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderParentRef: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRef = { ... }
```


### DataintegrationWorkspaceFolderRegistryMetadata <a name="DataintegrationWorkspaceFolderRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderRegistryMetadata: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#aggregator_key DataintegrationWorkspaceFolder#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.isFavorite">isFavorite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#is_favorite DataintegrationWorkspaceFolder#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#key DataintegrationWorkspaceFolder#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#labels DataintegrationWorkspaceFolder#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.registryVersion">registryVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#registry_version DataintegrationWorkspaceFolder#registry_version}. |

---

##### `aggregatorKey`<sup>Optional</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#aggregator_key DataintegrationWorkspaceFolder#aggregator_key}.

---

##### `isFavorite`<sup>Optional</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.isFavorite"></a>

```typescript
public readonly isFavorite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#is_favorite DataintegrationWorkspaceFolder#is_favorite}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#key DataintegrationWorkspaceFolder#key}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#labels DataintegrationWorkspaceFolder#labels}.

---

##### `registryVersion`<sup>Optional</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#registry_version DataintegrationWorkspaceFolder#registry_version}.

---

### DataintegrationWorkspaceFolderTimeouts <a name="DataintegrationWorkspaceFolderTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceFolderTimeouts: dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#create DataintegrationWorkspaceFolder#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#delete DataintegrationWorkspaceFolder#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#update DataintegrationWorkspaceFolder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#create DataintegrationWorkspaceFolder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#delete DataintegrationWorkspaceFolder#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_folder#update DataintegrationWorkspaceFolder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceFolderMetadataAggregatorList <a name="DataintegrationWorkspaceFolderMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceFolderMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceFolderMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceFolderMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregator">DataintegrationWorkspaceFolderMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderMetadataAggregator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregator">DataintegrationWorkspaceFolderMetadataAggregator</a>

---


### DataintegrationWorkspaceFolderMetadataCountStatisticsList <a name="DataintegrationWorkspaceFolderMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```typescript
public readonly objectCount: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatistics">DataintegrationWorkspaceFolderMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```typescript
public readonly objectTypeCountList: DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceFolderMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderMetadataCountStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatistics">DataintegrationWorkspaceFolderMetadataCountStatistics</a>

---


### DataintegrationWorkspaceFolderMetadataList <a name="DataintegrationWorkspaceFolderMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceFolderMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceFolderMetadataOutputReference <a name="DataintegrationWorkspaceFolderMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList">DataintegrationWorkspaceFolderMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList">DataintegrationWorkspaceFolderMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadata">DataintegrationWorkspaceFolderMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.aggregator"></a>

```typescript
public readonly aggregator: DataintegrationWorkspaceFolderMetadataAggregatorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataAggregatorList">DataintegrationWorkspaceFolderMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.countStatistics"></a>

```typescript
public readonly countStatistics: DataintegrationWorkspaceFolderMetadataCountStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataCountStatisticsList">DataintegrationWorkspaceFolderMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.createdByName"></a>

```typescript
public readonly createdByName: string;
```

- *Type:* string

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.identifierPath"></a>

```typescript
public readonly identifierPath: string;
```

- *Type:* string

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.infoFields"></a>

```typescript
public readonly infoFields: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.updatedByName"></a>

```typescript
public readonly updatedByName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderMetadata">DataintegrationWorkspaceFolderMetadata</a>

---


### DataintegrationWorkspaceFolderParentRefList <a name="DataintegrationWorkspaceFolderParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceFolderParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceFolderParentRefOutputReference <a name="DataintegrationWorkspaceFolderParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRef">DataintegrationWorkspaceFolderParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.rootDocId"></a>

```typescript
public readonly rootDocId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderParentRef;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderParentRef">DataintegrationWorkspaceFolderParentRef</a>

---


### DataintegrationWorkspaceFolderRegistryMetadataOutputReference <a name="DataintegrationWorkspaceFolderRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetAggregatorKey">resetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetIsFavorite">resetIsFavorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetRegistryVersion">resetRegistryVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregatorKey` <a name="resetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetAggregatorKey"></a>

```typescript
public resetAggregatorKey(): void
```

##### `resetIsFavorite` <a name="resetIsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetIsFavorite"></a>

```typescript
public resetIsFavorite(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRegistryVersion` <a name="resetRegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.resetRegistryVersion"></a>

```typescript
public resetRegistryVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKeyInput">aggregatorKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavoriteInput">isFavoriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersionInput">registryVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKeyInput`<sup>Optional</sup> <a name="aggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```typescript
public readonly aggregatorKeyInput: string;
```

- *Type:* string

---

##### `isFavoriteInput`<sup>Optional</sup> <a name="isFavoriteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```typescript
public readonly isFavoriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `registryVersionInput`<sup>Optional</sup> <a name="registryVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersionInput"></a>

```typescript
public readonly registryVersionInput: number;
```

- *Type:* number

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceFolderRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderRegistryMetadata">DataintegrationWorkspaceFolderRegistryMetadata</a>

---


### DataintegrationWorkspaceFolderTimeoutsOutputReference <a name="DataintegrationWorkspaceFolderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceFolder } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataintegrationWorkspaceFolderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceFolder.DataintegrationWorkspaceFolderTimeouts">DataintegrationWorkspaceFolderTimeouts</a>

---



