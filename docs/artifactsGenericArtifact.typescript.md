# `artifactsGenericArtifact` Submodule <a name="`artifactsGenericArtifact` Submodule" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsGenericArtifact <a name="ArtifactsGenericArtifact" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact oci_artifacts_generic_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

new artifactsGenericArtifact.ArtifactsGenericArtifact(scope: Construct, id: string, config: ArtifactsGenericArtifactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig">ArtifactsGenericArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig">ArtifactsGenericArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.putTimeouts"></a>

```typescript
public putTimeouts(value: ArtifactsGenericArtifactTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactsGenericArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isConstruct"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

artifactsGenericArtifact.ArtifactsGenericArtifact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformElement"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformResource"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArtifactsGenericArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactsGenericArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactsGenericArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsGenericArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactPath">artifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference">ArtifactsGenericArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactIdInput">artifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactsGenericArtifactTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference">ArtifactsGenericArtifactTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactIdInput"></a>

```typescript
public readonly artifactIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArtifactsGenericArtifactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a>

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsGenericArtifactConfig <a name="ArtifactsGenericArtifactConfig" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.Initializer"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

const artifactsGenericArtifactConfig: artifactsGenericArtifact.ArtifactsGenericArtifactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.artifactId">artifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#artifact_id ArtifactsGenericArtifact#artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#defined_tags ArtifactsGenericArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#freeform_tags ArtifactsGenericArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#id ArtifactsGenericArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#artifact_id ArtifactsGenericArtifact#artifact_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#defined_tags ArtifactsGenericArtifact#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#freeform_tags ArtifactsGenericArtifact#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#id ArtifactsGenericArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactsGenericArtifactTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#timeouts ArtifactsGenericArtifact#timeouts}

---

### ArtifactsGenericArtifactTimeouts <a name="ArtifactsGenericArtifactTimeouts" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.Initializer"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

const artifactsGenericArtifactTimeouts: artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#create ArtifactsGenericArtifact#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#delete ArtifactsGenericArtifact#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#update ArtifactsGenericArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#create ArtifactsGenericArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#delete ArtifactsGenericArtifact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_generic_artifact#update ArtifactsGenericArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsGenericArtifactTimeoutsOutputReference <a name="ArtifactsGenericArtifactTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.Initializer"></a>

```typescript
import { artifactsGenericArtifact } from 'rhizo-co-terraform-provider-oci'

new artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactsGenericArtifactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.artifactsGenericArtifact.ArtifactsGenericArtifactTimeouts">ArtifactsGenericArtifactTimeouts</a>

---



