# `datascienceModelArtifactImport` Submodule <a name="`datascienceModelArtifactImport` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelArtifactImport <a name="DatascienceModelArtifactImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import oci_datascience_model_artifact_import}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

new datascienceModelArtifactImport.DatascienceModelArtifactImport(scope: Construct, id: string, config: DatascienceModelArtifactImportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig">DatascienceModelArtifactImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig">DatascienceModelArtifactImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts"></a>

```typescript
public putTimeouts(value: DatascienceModelArtifactImportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceModelArtifactImport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatascienceModelArtifactImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatascienceModelArtifactImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatascienceModelArtifactImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelArtifactImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference">DatascienceModelArtifactImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceTypeInput">artifactSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucketInput">destinationBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectNameInput">destinationObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceType">artifactSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucket">destinationBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectName">destinationObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceModelArtifactImportTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference">DatascienceModelArtifactImportTimeoutsOutputReference</a>

---

##### `artifactSourceTypeInput`<sup>Optional</sup> <a name="artifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceTypeInput"></a>

```typescript
public readonly artifactSourceTypeInput: string;
```

- *Type:* string

---

##### `destinationBucketInput`<sup>Optional</sup> <a name="destinationBucketInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucketInput"></a>

```typescript
public readonly destinationBucketInput: string;
```

- *Type:* string

---

##### `destinationObjectNameInput`<sup>Optional</sup> <a name="destinationObjectNameInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectNameInput"></a>

```typescript
public readonly destinationObjectNameInput: string;
```

- *Type:* string

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatascienceModelArtifactImportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceType"></a>

```typescript
public readonly artifactSourceType: string;
```

- *Type:* string

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucket"></a>

```typescript
public readonly destinationBucket: string;
```

- *Type:* string

---

##### `destinationObjectName`<sup>Required</sup> <a name="destinationObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectName"></a>

```typescript
public readonly destinationObjectName: string;
```

- *Type:* string

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelArtifactImportConfig <a name="DatascienceModelArtifactImportConfig" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.Initializer"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

const datascienceModelArtifactImportConfig: datascienceModelArtifactImport.DatascienceModelArtifactImportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.artifactSourceType">artifactSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationBucket">destinationBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationObjectName">destinationObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.artifactSourceType"></a>

```typescript
public readonly artifactSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}.

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationBucket"></a>

```typescript
public readonly destinationBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}.

---

##### `destinationObjectName`<sup>Required</sup> <a name="destinationObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationObjectName"></a>

```typescript
public readonly destinationObjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}.

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceModelArtifactImportTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#timeouts DatascienceModelArtifactImport#timeouts}

---

### DatascienceModelArtifactImportTimeouts <a name="DatascienceModelArtifactImportTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.Initializer"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

const datascienceModelArtifactImportTimeouts: datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#create DatascienceModelArtifactImport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#delete DatascienceModelArtifactImport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#update DatascienceModelArtifactImport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#create DatascienceModelArtifactImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#delete DatascienceModelArtifactImport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#update DatascienceModelArtifactImport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelArtifactImportTimeoutsOutputReference <a name="DatascienceModelArtifactImportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer"></a>

```typescript
import { datascienceModelArtifactImport } from 'rhizo-co-terraform-provider-oci'

new datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatascienceModelArtifactImportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---



