# `genericArtifactsContentArtifactByPath` Submodule <a name="`genericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericArtifactsContentArtifactByPath <a name="GenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

new genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath(scope: Construct, id: string, config: GenericArtifactsContentArtifactByPathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts"></a>

```typescript
public putTimeouts(value: GenericArtifactsContentArtifactByPathTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

---

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenericArtifactsContentArtifactByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput">artifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath">artifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts"></a>

```typescript
public readonly timeouts: GenericArtifactsContentArtifactByPathTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a>

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```typescript
public readonly artifactPathInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GenericArtifactsContentArtifactByPathTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenericArtifactsContentArtifactByPathConfig <a name="GenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

const genericArtifactsContentArtifactByPathConfig: genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath">artifactPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GenericArtifactsContentArtifactByPathTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#timeouts GenericArtifactsContentArtifactByPath#timeouts}

---

### GenericArtifactsContentArtifactByPathTimeouts <a name="GenericArtifactsContentArtifactByPathTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.Initializer"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

const genericArtifactsContentArtifactByPathTimeouts: genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenericArtifactsContentArtifactByPathTimeoutsOutputReference <a name="GenericArtifactsContentArtifactByPathTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer"></a>

```typescript
import { genericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

new genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenericArtifactsContentArtifactByPathTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

---



