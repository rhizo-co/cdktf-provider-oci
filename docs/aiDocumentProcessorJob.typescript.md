# `aiDocumentProcessorJob` Submodule <a name="`aiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessorJob <a name="AiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJob(scope: Construct, id: string, config: AiDocumentProcessorJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig">AiDocumentProcessorJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation">putInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig">putProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputLocation` <a name="putInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation"></a>

```typescript
public putInputLocation(value: AiDocumentProcessorJobInputLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `putOutputLocation` <a name="putOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation"></a>

```typescript
public putOutputLocation(value: AiDocumentProcessorJobOutputLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `putProcessorConfig` <a name="putProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig"></a>

```typescript
public putProcessorConfig(value: AiDocumentProcessorJobProcessorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts"></a>

```typescript
public putTimeouts(value: AiDocumentProcessorJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiDocumentProcessorJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation">inputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation">outputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete">percentComplete</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig">processorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput">inputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput">outputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput">processorConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation"></a>

```typescript
public readonly inputLocation: AiDocumentProcessorJobInputLocationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation"></a>

```typescript
public readonly outputLocation: AiDocumentProcessorJobOutputLocationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a>

---

##### `percentComplete`<sup>Required</sup> <a name="percentComplete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete"></a>

```typescript
public readonly percentComplete: number;
```

- *Type:* number

---

##### `processorConfig`<sup>Required</sup> <a name="processorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig"></a>

```typescript
public readonly processorConfig: AiDocumentProcessorJobProcessorConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts"></a>

```typescript
public readonly timeouts: AiDocumentProcessorJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputLocationInput`<sup>Optional</sup> <a name="inputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput"></a>

```typescript
public readonly inputLocationInput: AiDocumentProcessorJobInputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: AiDocumentProcessorJobOutputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `processorConfigInput`<sup>Optional</sup> <a name="processorConfigInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput"></a>

```typescript
public readonly processorConfigInput: AiDocumentProcessorJobProcessorConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AiDocumentProcessorJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorJobConfig <a name="AiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobConfig: aiDocumentProcessorJob.AiDocumentProcessorJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation">inputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation">outputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig">processorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation"></a>

```typescript
public readonly inputLocation: AiDocumentProcessorJobInputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation"></a>

```typescript
public readonly outputLocation: AiDocumentProcessorJobOutputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `processorConfig`<sup>Required</sup> <a name="processorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig"></a>

```typescript
public readonly processorConfig: AiDocumentProcessorJobProcessorConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AiDocumentProcessorJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

### AiDocumentProcessorJobInputLocation <a name="AiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobInputLocation: aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations">objectLocations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]</code> | object_locations block. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

##### `objectLocations`<sup>Optional</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations"></a>

```typescript
public readonly objectLocations: IResolvable | AiDocumentProcessorJobInputLocationObjectLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

### AiDocumentProcessorJobInputLocationObjectLocations <a name="AiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobInputLocationObjectLocations: aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}.

---

### AiDocumentProcessorJobOutputLocation <a name="AiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobOutputLocation: aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

### AiDocumentProcessorJobProcessorConfig <a name="AiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobProcessorConfig: aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features">features</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]</code> | features block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType">processorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType">documentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled">isZipOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}. |

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features"></a>

```typescript
public readonly features: IResolvable | AiDocumentProcessorJobProcessorConfigFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

##### `isZipOutputEnabled`<sup>Optional</sup> <a name="isZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled"></a>

```typescript
public readonly isZipOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

##### `language`<sup>Optional</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

### AiDocumentProcessorJobProcessorConfigFeatures <a name="AiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobProcessorConfigFeatures: aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType">featureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf">generateSearchablePdf</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults">maxResults</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}. |

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}.

---

##### `generateSearchablePdf`<sup>Optional</sup> <a name="generateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf"></a>

```typescript
public readonly generateSearchablePdf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}.

---

##### `maxResults`<sup>Optional</sup> <a name="maxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}.

---

### AiDocumentProcessorJobTimeouts <a name="AiDocumentProcessorJobTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

const aiDocumentProcessorJobTimeouts: aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentProcessorJobInputLocationObjectLocationsList <a name="AiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```typescript
public get(index: number): AiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentProcessorJobInputLocationObjectLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]

---


### AiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="AiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentProcessorJobInputLocationObjectLocations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>

---


### AiDocumentProcessorJobInputLocationOutputReference <a name="AiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations">putObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations">resetObjectLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectLocations` <a name="putObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations"></a>

```typescript
public putObjectLocations(value: IResolvable | AiDocumentProcessorJobInputLocationObjectLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]

---

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetObjectLocations` <a name="resetObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations"></a>

```typescript
public resetObjectLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">objectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput">objectLocationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectLocations`<sup>Required</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```typescript
public readonly objectLocations: AiDocumentProcessorJobInputLocationObjectLocationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `objectLocationsInput`<sup>Optional</sup> <a name="objectLocationsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput"></a>

```typescript
public readonly objectLocationsInput: IResolvable | AiDocumentProcessorJobInputLocationObjectLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>[]

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentProcessorJobInputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---


### AiDocumentProcessorJobOutputLocationOutputReference <a name="AiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentProcessorJobOutputLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---


### AiDocumentProcessorJobProcessorConfigFeaturesList <a name="AiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```typescript
public get(index: number): AiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentProcessorJobProcessorConfigFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]

---


### AiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="AiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf">resetGenerateSearchablePdf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults">resetMaxResults</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId">resetTenancyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGenerateSearchablePdf` <a name="resetGenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf"></a>

```typescript
public resetGenerateSearchablePdf(): void
```

##### `resetMaxResults` <a name="resetMaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults"></a>

```typescript
public resetMaxResults(): void
```

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetTenancyId` <a name="resetTenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId"></a>

```typescript
public resetTenancyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput">featureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput">generateSearchablePdfInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput">maxResultsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">generateSearchablePdf</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">maxResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput"></a>

```typescript
public readonly featureTypeInput: string;
```

- *Type:* string

---

##### `generateSearchablePdfInput`<sup>Optional</sup> <a name="generateSearchablePdfInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput"></a>

```typescript
public readonly generateSearchablePdfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxResultsInput`<sup>Optional</sup> <a name="maxResultsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput"></a>

```typescript
public readonly maxResultsInput: number;
```

- *Type:* number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `generateSearchablePdf`<sup>Required</sup> <a name="generateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```typescript
public readonly generateSearchablePdf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxResults`<sup>Required</sup> <a name="maxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```typescript
public readonly maxResults: number;
```

- *Type:* number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentProcessorJobProcessorConfigFeatures;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>

---


### AiDocumentProcessorJobProcessorConfigOutputReference <a name="AiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType">resetDocumentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled">resetIsZipOutputEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatures` <a name="putFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures"></a>

```typescript
public putFeatures(value: IResolvable | AiDocumentProcessorJobProcessorConfigFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]

---

##### `resetDocumentType` <a name="resetDocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType"></a>

```typescript
public resetDocumentType(): void
```

##### `resetIsZipOutputEnabled` <a name="resetIsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled"></a>

```typescript
public resetIsZipOutputEnabled(): void
```

##### `resetLanguage` <a name="resetLanguage" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage"></a>

```typescript
public resetLanguage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features">features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput">documentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput">featuresInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput">isZipOutputEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">documentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">isZipOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">processorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```typescript
public readonly features: AiDocumentProcessorJobProcessorConfigFeaturesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `documentTypeInput`<sup>Optional</sup> <a name="documentTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput"></a>

```typescript
public readonly documentTypeInput: string;
```

- *Type:* string

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput"></a>

```typescript
public readonly featuresInput: IResolvable | AiDocumentProcessorJobProcessorConfigFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>[]

---

##### `isZipOutputEnabledInput`<sup>Optional</sup> <a name="isZipOutputEnabledInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput"></a>

```typescript
public readonly isZipOutputEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput"></a>

```typescript
public readonly processorTypeInput: string;
```

- *Type:* string

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

---

##### `isZipOutputEnabled`<sup>Required</sup> <a name="isZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```typescript
public readonly isZipOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```typescript
public readonly processorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentProcessorJobProcessorConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---


### AiDocumentProcessorJobTimeoutsOutputReference <a name="AiDocumentProcessorJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { aiDocumentProcessorJob } from 'rhizo-co-terraform-provider-oci'

new aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentProcessorJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---



