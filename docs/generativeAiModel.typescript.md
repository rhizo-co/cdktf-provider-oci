# `generativeAiModel` Submodule <a name="`generativeAiModel` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiModel <a name="GenerativeAiModel" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model oci_generative_ai_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModel(scope: Construct, id: string, config: GenerativeAiModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig">GenerativeAiModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails">putFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor">resetVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFineTuneDetails` <a name="putFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails"></a>

```typescript
public putFineTuneDetails(value: GenerativeAiModelFineTuneDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts"></a>

```typescript
public putTimeouts(value: GenerativeAiModelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVendor` <a name="resetVendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor"></a>

```typescript
public resetVendor(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

generativeAiModel.GenerativeAiModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

generativeAiModel.GenerativeAiModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

generativeAiModel.GenerativeAiModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

generativeAiModel.GenerativeAiModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenerativeAiModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenerativeAiModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails">fineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported">isLongTermSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics">modelMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated">timeDeprecated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput">baseModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput">fineTuneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput">vendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId">baseModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `fineTuneDetails`<sup>Required</sup> <a name="fineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails"></a>

```typescript
public readonly fineTuneDetails: GenerativeAiModelFineTuneDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a>

---

##### `isLongTermSupported`<sup>Required</sup> <a name="isLongTermSupported" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported"></a>

```typescript
public readonly isLongTermSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `modelMetrics`<sup>Required</sup> <a name="modelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics"></a>

```typescript
public readonly modelMetrics: GenerativeAiModelModelMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDeprecated`<sup>Required</sup> <a name="timeDeprecated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated"></a>

```typescript
public readonly timeDeprecated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiModelTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `baseModelIdInput`<sup>Optional</sup> <a name="baseModelIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput"></a>

```typescript
public readonly baseModelIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fineTuneDetailsInput`<sup>Optional</sup> <a name="fineTuneDetailsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput"></a>

```typescript
public readonly fineTuneDetailsInput: GenerativeAiModelFineTuneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GenerativeAiModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput"></a>

```typescript
public readonly vendorInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `baseModelId`<sup>Required</sup> <a name="baseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId"></a>

```typescript
public readonly baseModelId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiModelConfig <a name="GenerativeAiModelConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelConfig: generativeAiModel.GenerativeAiModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId">baseModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails">fineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | fine_tune_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor">vendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseModelId`<sup>Required</sup> <a name="baseModelId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId"></a>

```typescript
public readonly baseModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}.

---

##### `fineTuneDetails`<sup>Required</sup> <a name="fineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails"></a>

```typescript
public readonly fineTuneDetails: GenerativeAiModelFineTuneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

fine_tune_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiModelTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}.

---

### GenerativeAiModelFineTuneDetails <a name="GenerativeAiModelFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelFineTuneDetails: generativeAiModel.GenerativeAiModelFineTuneDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId">dedicatedAiClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig">trainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | training_config block. |

---

##### `dedicatedAiClusterId`<sup>Required</sup> <a name="dedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId"></a>

```typescript
public readonly dedicatedAiClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}.

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset"></a>

```typescript
public readonly trainingDataset: GenerativeAiModelFineTuneDetailsTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}

---

##### `trainingConfig`<sup>Optional</sup> <a name="trainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig"></a>

```typescript
public readonly trainingConfig: GenerativeAiModelFineTuneDetailsTrainingConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

training_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}

---

### GenerativeAiModelFineTuneDetailsTrainingConfig <a name="GenerativeAiModelFineTuneDetailsTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelFineTuneDetailsTrainingConfig: generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType">trainingConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience">earlyStoppingPatience</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold">earlyStoppingThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate">learningRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps">logModelMetricsIntervalInSteps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha">loraAlpha</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout">loraDropout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR">loraR</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers">numOfLastLayers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs">totalTrainingEpochs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize">trainingBatchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}. |

---

##### `trainingConfigType`<sup>Required</sup> <a name="trainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType"></a>

```typescript
public readonly trainingConfigType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}.

---

##### `earlyStoppingPatience`<sup>Optional</sup> <a name="earlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience"></a>

```typescript
public readonly earlyStoppingPatience: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}.

---

##### `earlyStoppingThreshold`<sup>Optional</sup> <a name="earlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold"></a>

```typescript
public readonly earlyStoppingThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}.

---

##### `learningRate`<sup>Optional</sup> <a name="learningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate"></a>

```typescript
public readonly learningRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}.

---

##### `logModelMetricsIntervalInSteps`<sup>Optional</sup> <a name="logModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps"></a>

```typescript
public readonly logModelMetricsIntervalInSteps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}.

---

##### `loraAlpha`<sup>Optional</sup> <a name="loraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha"></a>

```typescript
public readonly loraAlpha: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}.

---

##### `loraDropout`<sup>Optional</sup> <a name="loraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout"></a>

```typescript
public readonly loraDropout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}.

---

##### `loraR`<sup>Optional</sup> <a name="loraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR"></a>

```typescript
public readonly loraR: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}.

---

##### `numOfLastLayers`<sup>Optional</sup> <a name="numOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers"></a>

```typescript
public readonly numOfLastLayers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}.

---

##### `totalTrainingEpochs`<sup>Optional</sup> <a name="totalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs"></a>

```typescript
public readonly totalTrainingEpochs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}.

---

##### `trainingBatchSize`<sup>Optional</sup> <a name="trainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize"></a>

```typescript
public readonly trainingBatchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}.

---

### GenerativeAiModelFineTuneDetailsTrainingDataset <a name="GenerativeAiModelFineTuneDetailsTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelFineTuneDetailsTrainingDataset: generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType">datasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}.

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}.

---

### GenerativeAiModelModelMetrics <a name="GenerativeAiModelModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelModelMetrics: generativeAiModel.GenerativeAiModelModelMetrics = { ... }
```


### GenerativeAiModelTimeouts <a name="GenerativeAiModelTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

const generativeAiModelTimeouts: generativeAiModel.GenerativeAiModelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiModelFineTuneDetailsOutputReference <a name="GenerativeAiModelFineTuneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig">putTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset">putTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig">resetTrainingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrainingConfig` <a name="putTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig"></a>

```typescript
public putTrainingConfig(value: GenerativeAiModelFineTuneDetailsTrainingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `putTrainingDataset` <a name="putTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset"></a>

```typescript
public putTrainingDataset(value: GenerativeAiModelFineTuneDetailsTrainingDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `resetTrainingConfig` <a name="resetTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig"></a>

```typescript
public resetTrainingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig">trainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput">dedicatedAiClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput">trainingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput">trainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId">dedicatedAiClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trainingConfig`<sup>Required</sup> <a name="trainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig"></a>

```typescript
public readonly trainingConfig: GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a>

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset"></a>

```typescript
public readonly trainingDataset: GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a>

---

##### `dedicatedAiClusterIdInput`<sup>Optional</sup> <a name="dedicatedAiClusterIdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput"></a>

```typescript
public readonly dedicatedAiClusterIdInput: string;
```

- *Type:* string

---

##### `trainingConfigInput`<sup>Optional</sup> <a name="trainingConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput"></a>

```typescript
public readonly trainingConfigInput: GenerativeAiModelFineTuneDetailsTrainingConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `trainingDatasetInput`<sup>Optional</sup> <a name="trainingDatasetInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput"></a>

```typescript
public readonly trainingDatasetInput: GenerativeAiModelFineTuneDetailsTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `dedicatedAiClusterId`<sup>Required</sup> <a name="dedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId"></a>

```typescript
public readonly dedicatedAiClusterId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiModelFineTuneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---


### GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience">resetEarlyStoppingPatience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold">resetEarlyStoppingThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate">resetLearningRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps">resetLogModelMetricsIntervalInSteps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha">resetLoraAlpha</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout">resetLoraDropout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR">resetLoraR</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers">resetNumOfLastLayers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs">resetTotalTrainingEpochs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize">resetTrainingBatchSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEarlyStoppingPatience` <a name="resetEarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience"></a>

```typescript
public resetEarlyStoppingPatience(): void
```

##### `resetEarlyStoppingThreshold` <a name="resetEarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold"></a>

```typescript
public resetEarlyStoppingThreshold(): void
```

##### `resetLearningRate` <a name="resetLearningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate"></a>

```typescript
public resetLearningRate(): void
```

##### `resetLogModelMetricsIntervalInSteps` <a name="resetLogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps"></a>

```typescript
public resetLogModelMetricsIntervalInSteps(): void
```

##### `resetLoraAlpha` <a name="resetLoraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha"></a>

```typescript
public resetLoraAlpha(): void
```

##### `resetLoraDropout` <a name="resetLoraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout"></a>

```typescript
public resetLoraDropout(): void
```

##### `resetLoraR` <a name="resetLoraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR"></a>

```typescript
public resetLoraR(): void
```

##### `resetNumOfLastLayers` <a name="resetNumOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers"></a>

```typescript
public resetNumOfLastLayers(): void
```

##### `resetTotalTrainingEpochs` <a name="resetTotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs"></a>

```typescript
public resetTotalTrainingEpochs(): void
```

##### `resetTrainingBatchSize` <a name="resetTrainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize"></a>

```typescript
public resetTrainingBatchSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput">earlyStoppingPatienceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput">earlyStoppingThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput">learningRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput">logModelMetricsIntervalInStepsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput">loraAlphaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput">loraDropoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput">loraRInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput">numOfLastLayersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput">totalTrainingEpochsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput">trainingBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput">trainingConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience">earlyStoppingPatience</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold">earlyStoppingThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate">learningRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps">logModelMetricsIntervalInSteps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha">loraAlpha</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout">loraDropout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR">loraR</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers">numOfLastLayers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs">totalTrainingEpochs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize">trainingBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType">trainingConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `earlyStoppingPatienceInput`<sup>Optional</sup> <a name="earlyStoppingPatienceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput"></a>

```typescript
public readonly earlyStoppingPatienceInput: number;
```

- *Type:* number

---

##### `earlyStoppingThresholdInput`<sup>Optional</sup> <a name="earlyStoppingThresholdInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput"></a>

```typescript
public readonly earlyStoppingThresholdInput: number;
```

- *Type:* number

---

##### `learningRateInput`<sup>Optional</sup> <a name="learningRateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput"></a>

```typescript
public readonly learningRateInput: number;
```

- *Type:* number

---

##### `logModelMetricsIntervalInStepsInput`<sup>Optional</sup> <a name="logModelMetricsIntervalInStepsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput"></a>

```typescript
public readonly logModelMetricsIntervalInStepsInput: number;
```

- *Type:* number

---

##### `loraAlphaInput`<sup>Optional</sup> <a name="loraAlphaInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput"></a>

```typescript
public readonly loraAlphaInput: number;
```

- *Type:* number

---

##### `loraDropoutInput`<sup>Optional</sup> <a name="loraDropoutInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput"></a>

```typescript
public readonly loraDropoutInput: number;
```

- *Type:* number

---

##### `loraRInput`<sup>Optional</sup> <a name="loraRInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput"></a>

```typescript
public readonly loraRInput: number;
```

- *Type:* number

---

##### `numOfLastLayersInput`<sup>Optional</sup> <a name="numOfLastLayersInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput"></a>

```typescript
public readonly numOfLastLayersInput: number;
```

- *Type:* number

---

##### `totalTrainingEpochsInput`<sup>Optional</sup> <a name="totalTrainingEpochsInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput"></a>

```typescript
public readonly totalTrainingEpochsInput: number;
```

- *Type:* number

---

##### `trainingBatchSizeInput`<sup>Optional</sup> <a name="trainingBatchSizeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput"></a>

```typescript
public readonly trainingBatchSizeInput: number;
```

- *Type:* number

---

##### `trainingConfigTypeInput`<sup>Optional</sup> <a name="trainingConfigTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput"></a>

```typescript
public readonly trainingConfigTypeInput: string;
```

- *Type:* string

---

##### `earlyStoppingPatience`<sup>Required</sup> <a name="earlyStoppingPatience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience"></a>

```typescript
public readonly earlyStoppingPatience: number;
```

- *Type:* number

---

##### `earlyStoppingThreshold`<sup>Required</sup> <a name="earlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold"></a>

```typescript
public readonly earlyStoppingThreshold: number;
```

- *Type:* number

---

##### `learningRate`<sup>Required</sup> <a name="learningRate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate"></a>

```typescript
public readonly learningRate: number;
```

- *Type:* number

---

##### `logModelMetricsIntervalInSteps`<sup>Required</sup> <a name="logModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps"></a>

```typescript
public readonly logModelMetricsIntervalInSteps: number;
```

- *Type:* number

---

##### `loraAlpha`<sup>Required</sup> <a name="loraAlpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha"></a>

```typescript
public readonly loraAlpha: number;
```

- *Type:* number

---

##### `loraDropout`<sup>Required</sup> <a name="loraDropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout"></a>

```typescript
public readonly loraDropout: number;
```

- *Type:* number

---

##### `loraR`<sup>Required</sup> <a name="loraR" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR"></a>

```typescript
public readonly loraR: number;
```

- *Type:* number

---

##### `numOfLastLayers`<sup>Required</sup> <a name="numOfLastLayers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers"></a>

```typescript
public readonly numOfLastLayers: number;
```

- *Type:* number

---

##### `totalTrainingEpochs`<sup>Required</sup> <a name="totalTrainingEpochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs"></a>

```typescript
public readonly totalTrainingEpochs: number;
```

- *Type:* number

---

##### `trainingBatchSize`<sup>Required</sup> <a name="trainingBatchSize" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize"></a>

```typescript
public readonly trainingBatchSize: number;
```

- *Type:* number

---

##### `trainingConfigType`<sup>Required</sup> <a name="trainingConfigType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType"></a>

```typescript
public readonly trainingConfigType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiModelFineTuneDetailsTrainingConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---


### GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```typescript
public readonly datasetTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiModelFineTuneDetailsTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---


### GenerativeAiModelModelMetricsList <a name="GenerativeAiModelModelMetricsList" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelModelMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get"></a>

```typescript
public get(index: number): GenerativeAiModelModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GenerativeAiModelModelMetricsOutputReference <a name="GenerativeAiModelModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelModelMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy">finalAccuracy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss">finalLoss</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType">modelMetricsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `finalAccuracy`<sup>Required</sup> <a name="finalAccuracy" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy"></a>

```typescript
public readonly finalAccuracy: number;
```

- *Type:* number

---

##### `finalLoss`<sup>Required</sup> <a name="finalLoss" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss"></a>

```typescript
public readonly finalLoss: number;
```

- *Type:* number

---

##### `modelMetricsType`<sup>Required</sup> <a name="modelMetricsType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType"></a>

```typescript
public readonly modelMetricsType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiModelModelMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a>

---


### GenerativeAiModelTimeoutsOutputReference <a name="GenerativeAiModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer"></a>

```typescript
import { generativeAiModel } from 'rhizo-co-terraform-provider-oci'

new generativeAiModel.GenerativeAiModelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenerativeAiModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

---



