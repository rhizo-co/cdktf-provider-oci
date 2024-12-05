# `generativeAiAgentDataIngestionJob` Submodule <a name="`generativeAiAgentDataIngestionJob` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentDataIngestionJob <a name="GenerativeAiAgentDataIngestionJob" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job oci_generative_ai_agent_data_ingestion_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob(scope: Construct, id: string, config: GenerativeAiAgentDataIngestionJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig">GenerativeAiAgentDataIngestionJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig">GenerativeAiAgentDataIngestionJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GenerativeAiAgentDataIngestionJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiAgentDataIngestionJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isConstruct"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformElement"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformResource"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenerativeAiAgentDataIngestionJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenerativeAiAgentDataIngestionJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenerativeAiAgentDataIngestionJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentDataIngestionJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataIngestionJobStatistics">dataIngestionJobStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList">GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference">GenerativeAiAgentDataIngestionJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataIngestionJobStatistics`<sup>Required</sup> <a name="dataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataIngestionJobStatistics"></a>

```typescript
public readonly dataIngestionJobStatistics: GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList">GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiAgentDataIngestionJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference">GenerativeAiAgentDataIngestionJobTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GenerativeAiAgentDataIngestionJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentDataIngestionJobConfig <a name="GenerativeAiAgentDataIngestionJobConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentDataIngestionJobConfig: generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#compartment_id GenerativeAiAgentDataIngestionJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#data_source_id GenerativeAiAgentDataIngestionJob#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#defined_tags GenerativeAiAgentDataIngestionJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#description GenerativeAiAgentDataIngestionJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#display_name GenerativeAiAgentDataIngestionJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#freeform_tags GenerativeAiAgentDataIngestionJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#id GenerativeAiAgentDataIngestionJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#compartment_id GenerativeAiAgentDataIngestionJob#compartment_id}.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#data_source_id GenerativeAiAgentDataIngestionJob#data_source_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#defined_tags GenerativeAiAgentDataIngestionJob#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#description GenerativeAiAgentDataIngestionJob#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#display_name GenerativeAiAgentDataIngestionJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#freeform_tags GenerativeAiAgentDataIngestionJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#id GenerativeAiAgentDataIngestionJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GenerativeAiAgentDataIngestionJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#timeouts GenerativeAiAgentDataIngestionJob#timeouts}

---

### GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics <a name="GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentDataIngestionJobDataIngestionJobStatistics: generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics = { ... }
```


### GenerativeAiAgentDataIngestionJobTimeouts <a name="GenerativeAiAgentDataIngestionJobTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

const generativeAiAgentDataIngestionJobTimeouts: generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#create GenerativeAiAgentDataIngestionJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#delete GenerativeAiAgentDataIngestionJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#update GenerativeAiAgentDataIngestionJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#create GenerativeAiAgentDataIngestionJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#delete GenerativeAiAgentDataIngestionJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_ingestion_job#update GenerativeAiAgentDataIngestionJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList <a name="GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get"></a>

```typescript
public get(index: number): GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference <a name="GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles">numberOfFailedFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles">numberOfIngestedFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics">GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

---

##### `numberOfFailedFiles`<sup>Required</sup> <a name="numberOfFailedFiles" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles"></a>

```typescript
public readonly numberOfFailedFiles: number;
```

- *Type:* number

---

##### `numberOfIngestedFiles`<sup>Required</sup> <a name="numberOfIngestedFiles" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles"></a>

```typescript
public readonly numberOfIngestedFiles: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics">GenerativeAiAgentDataIngestionJobDataIngestionJobStatistics</a>

---


### GenerativeAiAgentDataIngestionJobTimeoutsOutputReference <a name="GenerativeAiAgentDataIngestionJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { generativeAiAgentDataIngestionJob } from 'rhizo-co-terraform-provider-oci'

new generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GenerativeAiAgentDataIngestionJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataIngestionJob.GenerativeAiAgentDataIngestionJobTimeouts">GenerativeAiAgentDataIngestionJobTimeouts</a>

---



