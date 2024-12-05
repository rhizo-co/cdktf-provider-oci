# `artifactsContainerRepository` Submodule <a name="`artifactsContainerRepository` Submodule" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsContainerRepository <a name="ArtifactsContainerRepository" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository oci_artifacts_container_repository}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

new artifactsContainerRepository.ArtifactsContainerRepository(scope: Construct, id: string, config: ArtifactsContainerRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig">ArtifactsContainerRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig">ArtifactsContainerRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme">putReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable">resetIsImmutable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme">resetReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReadme` <a name="putReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme"></a>

```typescript
public putReadme(value: ArtifactsContainerRepositoryReadme): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: ArtifactsContainerRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsImmutable` <a name="resetIsImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable"></a>

```typescript
public resetIsImmutable(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetReadme` <a name="resetReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme"></a>

```typescript
public resetReadme(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

artifactsContainerRepository.ArtifactsContainerRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactsContainerRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactsContainerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsContainerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs">billableSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount">imageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount">layerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes">layersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed">timeLastPushed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput">isImmutableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput">readmeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable">isImmutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billableSizeInGbs`<sup>Required</sup> <a name="billableSizeInGbs" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs"></a>

```typescript
public readonly billableSizeInGbs: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `imageCount`<sup>Required</sup> <a name="imageCount" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount"></a>

```typescript
public readonly imageCount: number;
```

- *Type:* number

---

##### `layerCount`<sup>Required</sup> <a name="layerCount" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount"></a>

```typescript
public readonly layerCount: number;
```

- *Type:* number

---

##### `layersSizeInBytes`<sup>Required</sup> <a name="layersSizeInBytes" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes"></a>

```typescript
public readonly layersSizeInBytes: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `readme`<sup>Required</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme"></a>

```typescript
public readonly readme: ArtifactsContainerRepositoryReadmeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastPushed`<sup>Required</sup> <a name="timeLastPushed" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed"></a>

```typescript
public readonly timeLastPushed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactsContainerRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isImmutableInput`<sup>Optional</sup> <a name="isImmutableInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput"></a>

```typescript
public readonly isImmutableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readmeInput`<sup>Optional</sup> <a name="readmeInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput"></a>

```typescript
public readonly readmeInput: ArtifactsContainerRepositoryReadme;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArtifactsContainerRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isImmutable`<sup>Required</sup> <a name="isImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable"></a>

```typescript
public readonly isImmutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsContainerRepositoryConfig <a name="ArtifactsContainerRepositoryConfig" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

const artifactsContainerRepositoryConfig: artifactsContainerRepository.ArtifactsContainerRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable">isImmutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | readme block. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isImmutable`<sup>Optional</sup> <a name="isImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable"></a>

```typescript
public readonly isImmutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme"></a>

```typescript
public readonly readme: ArtifactsContainerRepositoryReadme;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

readme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#readme ArtifactsContainerRepository#readme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactsContainerRepositoryTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#timeouts ArtifactsContainerRepository#timeouts}

---

### ArtifactsContainerRepositoryReadme <a name="ArtifactsContainerRepositoryReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

const artifactsContainerRepositoryReadme: artifactsContainerRepository.ArtifactsContainerRepositoryReadme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}.

---

### ArtifactsContainerRepositoryTimeouts <a name="ArtifactsContainerRepositoryTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

const artifactsContainerRepositoryTimeouts: artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsContainerRepositoryReadmeOutputReference <a name="ArtifactsContainerRepositoryReadmeOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

new artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactsContainerRepositoryReadme;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---


### ArtifactsContainerRepositoryTimeoutsOutputReference <a name="ArtifactsContainerRepositoryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { artifactsContainerRepository } from 'rhizo-co-terraform-provider-oci'

new artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactsContainerRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

---



