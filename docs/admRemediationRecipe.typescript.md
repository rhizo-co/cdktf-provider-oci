# `admRemediationRecipe` Submodule <a name="`admRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.admRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdmRemediationRecipe <a name="AdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipe(scope: Construct, id: string, config: AdmRemediationRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration">putDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration">putScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration">putVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectConfiguration` <a name="putDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration"></a>

```typescript
public putDetectConfiguration(value: AdmRemediationRecipeDetectConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: AdmRemediationRecipeNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `putScmConfiguration` <a name="putScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration"></a>

```typescript
public putScmConfiguration(value: AdmRemediationRecipeScmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts"></a>

```typescript
public putTimeouts(value: AdmRemediationRecipeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `putVerifyConfiguration` <a name="putVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration"></a>

```typescript
public putVerifyConfiguration(value: AdmRemediationRecipeVerifyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

admRemediationRecipe.AdmRemediationRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

admRemediationRecipe.AdmRemediationRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

admRemediationRecipe.AdmRemediationRecipe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdmRemediationRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput">detectConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput">isRunTriggeredOnKbChangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput">scmConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput">verifyConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration"></a>

```typescript
public readonly detectConfiguration: AdmRemediationRecipeDetectConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: AdmRemediationRecipeNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a>

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration"></a>

```typescript
public readonly scmConfiguration: AdmRemediationRecipeScmConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts"></a>

```typescript
public readonly timeouts: AdmRemediationRecipeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration"></a>

```typescript
public readonly verifyConfiguration: AdmRemediationRecipeVerifyConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `detectConfigurationInput`<sup>Optional</sup> <a name="detectConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput"></a>

```typescript
public readonly detectConfigurationInput: AdmRemediationRecipeDetectConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRunTriggeredOnKbChangeInput`<sup>Optional</sup> <a name="isRunTriggeredOnKbChangeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput"></a>

```typescript
public readonly isRunTriggeredOnKbChangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput"></a>

```typescript
public readonly knowledgeBaseIdInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: AdmRemediationRecipeNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `scmConfigurationInput`<sup>Optional</sup> <a name="scmConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput"></a>

```typescript
public readonly scmConfigurationInput: AdmRemediationRecipeScmConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AdmRemediationRecipeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `verifyConfigurationInput`<sup>Optional</sup> <a name="verifyConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput"></a>

```typescript
public readonly verifyConfigurationInput: AdmRemediationRecipeVerifyConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```typescript
public readonly isRunTriggeredOnKbChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdmRemediationRecipeConfig <a name="AdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeConfig: admRemediationRecipe.AdmRemediationRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration"></a>

```typescript
public readonly detectConfiguration: AdmRemediationRecipeDetectConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange"></a>

```typescript
public readonly isRunTriggeredOnKbChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: AdmRemediationRecipeNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration"></a>

```typescript
public readonly scmConfiguration: AdmRemediationRecipeScmConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration"></a>

```typescript
public readonly verifyConfiguration: AdmRemediationRecipeVerifyConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AdmRemediationRecipeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

### AdmRemediationRecipeDetectConfiguration <a name="AdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeDetectConfiguration: admRemediationRecipe.AdmRemediationRecipeDetectConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score">maxPermissibleCvssV2Score</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score">maxPermissibleCvssV3Score</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity">maxPermissibleSeverity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy">upgradePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

##### `maxPermissibleCvssV2Score`<sup>Optional</sup> <a name="maxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score"></a>

```typescript
public readonly maxPermissibleCvssV2Score: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

##### `maxPermissibleCvssV3Score`<sup>Optional</sup> <a name="maxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score"></a>

```typescript
public readonly maxPermissibleCvssV3Score: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

##### `maxPermissibleSeverity`<sup>Optional</sup> <a name="maxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity"></a>

```typescript
public readonly maxPermissibleSeverity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

### AdmRemediationRecipeNetworkConfiguration <a name="AdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeNetworkConfiguration: admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

### AdmRemediationRecipeScmConfiguration <a name="AdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeScmConfiguration: admRemediationRecipe.AdmRemediationRecipeScmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled">isAutomergeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType">scmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation">buildFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType">externalScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId">ociCodeRepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId">patSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

##### `isAutomergeEnabled`<sup>Required</sup> <a name="isAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled"></a>

```typescript
public readonly isAutomergeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

##### `buildFileLocation`<sup>Optional</sup> <a name="buildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation"></a>

```typescript
public readonly buildFileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

##### `externalScmType`<sup>Optional</sup> <a name="externalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType"></a>

```typescript
public readonly externalScmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

##### `ociCodeRepositoryId`<sup>Optional</sup> <a name="ociCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId"></a>

```typescript
public readonly ociCodeRepositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

##### `patSecretId`<sup>Optional</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId"></a>

```typescript
public readonly patSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

### AdmRemediationRecipeTimeouts <a name="AdmRemediationRecipeTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeTimeouts: admRemediationRecipe.AdmRemediationRecipeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

### AdmRemediationRecipeVerifyConfiguration <a name="AdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

const admRemediationRecipeVerifyConfiguration: admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType">buildServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl">jenkinsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId">patSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId">triggerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName">workflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}. |

---

##### `buildServiceType`<sup>Required</sup> <a name="buildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType"></a>

```typescript
public readonly buildServiceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

##### `jenkinsUrl`<sup>Optional</sup> <a name="jenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl"></a>

```typescript
public readonly jenkinsUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

##### `patSecretId`<sup>Optional</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId"></a>

```typescript
public readonly patSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `triggerSecretId`<sup>Optional</sup> <a name="triggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId"></a>

```typescript
public readonly triggerSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdmRemediationRecipeDetectConfigurationOutputReference <a name="AdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score">resetMaxPermissibleCvssV2Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score">resetMaxPermissibleCvssV3Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity">resetMaxPermissibleSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetMaxPermissibleCvssV2Score` <a name="resetMaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score"></a>

```typescript
public resetMaxPermissibleCvssV2Score(): void
```

##### `resetMaxPermissibleCvssV3Score` <a name="resetMaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score"></a>

```typescript
public resetMaxPermissibleCvssV3Score(): void
```

##### `resetMaxPermissibleSeverity` <a name="resetMaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity"></a>

```typescript
public resetMaxPermissibleSeverity(): void
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy"></a>

```typescript
public resetUpgradePolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput">maxPermissibleCvssV2ScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput">maxPermissibleCvssV3ScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput">maxPermissibleSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">maxPermissibleCvssV2Score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">maxPermissibleCvssV3Score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">maxPermissibleSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">upgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `maxPermissibleCvssV2ScoreInput`<sup>Optional</sup> <a name="maxPermissibleCvssV2ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput"></a>

```typescript
public readonly maxPermissibleCvssV2ScoreInput: number;
```

- *Type:* number

---

##### `maxPermissibleCvssV3ScoreInput`<sup>Optional</sup> <a name="maxPermissibleCvssV3ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput"></a>

```typescript
public readonly maxPermissibleCvssV3ScoreInput: number;
```

- *Type:* number

---

##### `maxPermissibleSeverityInput`<sup>Optional</sup> <a name="maxPermissibleSeverityInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput"></a>

```typescript
public readonly maxPermissibleSeverityInput: string;
```

- *Type:* string

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput"></a>

```typescript
public readonly upgradePolicyInput: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `maxPermissibleCvssV2Score`<sup>Required</sup> <a name="maxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```typescript
public readonly maxPermissibleCvssV2Score: number;
```

- *Type:* number

---

##### `maxPermissibleCvssV3Score`<sup>Required</sup> <a name="maxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```typescript
public readonly maxPermissibleCvssV3Score: number;
```

- *Type:* number

---

##### `maxPermissibleSeverity`<sup>Required</sup> <a name="maxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```typescript
public readonly maxPermissibleSeverity: string;
```

- *Type:* string

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdmRemediationRecipeDetectConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---


### AdmRemediationRecipeNetworkConfigurationOutputReference <a name="AdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdmRemediationRecipeNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---


### AdmRemediationRecipeScmConfigurationOutputReference <a name="AdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation">resetBuildFileLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType">resetExternalScmType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId">resetOciCodeRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId">resetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildFileLocation` <a name="resetBuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation"></a>

```typescript
public resetBuildFileLocation(): void
```

##### `resetExternalScmType` <a name="resetExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType"></a>

```typescript
public resetExternalScmType(): void
```

##### `resetOciCodeRepositoryId` <a name="resetOciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId"></a>

```typescript
public resetOciCodeRepositoryId(): void
```

##### `resetPatSecretId` <a name="resetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId"></a>

```typescript
public resetPatSecretId(): void
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl"></a>

```typescript
public resetRepositoryUrl(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput">buildFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput">externalScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput">isAutomergeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput">ociCodeRepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput">patSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">buildFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">externalScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">isAutomergeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">ociCodeRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `buildFileLocationInput`<sup>Optional</sup> <a name="buildFileLocationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput"></a>

```typescript
public readonly buildFileLocationInput: string;
```

- *Type:* string

---

##### `externalScmTypeInput`<sup>Optional</sup> <a name="externalScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput"></a>

```typescript
public readonly externalScmTypeInput: string;
```

- *Type:* string

---

##### `isAutomergeEnabledInput`<sup>Optional</sup> <a name="isAutomergeEnabledInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput"></a>

```typescript
public readonly isAutomergeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ociCodeRepositoryIdInput`<sup>Optional</sup> <a name="ociCodeRepositoryIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput"></a>

```typescript
public readonly ociCodeRepositoryIdInput: string;
```

- *Type:* string

---

##### `patSecretIdInput`<sup>Optional</sup> <a name="patSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput"></a>

```typescript
public readonly patSecretIdInput: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput"></a>

```typescript
public readonly scmTypeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `buildFileLocation`<sup>Required</sup> <a name="buildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```typescript
public readonly buildFileLocation: string;
```

- *Type:* string

---

##### `externalScmType`<sup>Required</sup> <a name="externalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```typescript
public readonly externalScmType: string;
```

- *Type:* string

---

##### `isAutomergeEnabled`<sup>Required</sup> <a name="isAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```typescript
public readonly isAutomergeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ociCodeRepositoryId`<sup>Required</sup> <a name="ociCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```typescript
public readonly ociCodeRepositoryId: string;
```

- *Type:* string

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```typescript
public readonly patSecretId: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdmRemediationRecipeScmConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---


### AdmRemediationRecipeTimeoutsOutputReference <a name="AdmRemediationRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AdmRemediationRecipeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---


### AdmRemediationRecipeVerifyConfigurationOutputReference <a name="AdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```typescript
import { admRemediationRecipe } from 'rhizo-co-terraform-provider-oci'

new admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters">resetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl">resetJenkinsUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId">resetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId">resetTriggerSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalParameters` <a name="resetAdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters"></a>

```typescript
public resetAdditionalParameters(): void
```

##### `resetJenkinsUrl` <a name="resetJenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl"></a>

```typescript
public resetJenkinsUrl(): void
```

##### `resetJobName` <a name="resetJobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetPatSecretId` <a name="resetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId"></a>

```typescript
public resetPatSecretId(): void
```

##### `resetPipelineId` <a name="resetPipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl"></a>

```typescript
public resetRepositoryUrl(): void
```

##### `resetTriggerSecretId` <a name="resetTriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId"></a>

```typescript
public resetTriggerSecretId(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName"></a>

```typescript
public resetWorkflowName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput">additionalParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput">buildServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput">jenkinsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput">patSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput">triggerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">buildServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">jenkinsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">triggerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalParametersInput`<sup>Optional</sup> <a name="additionalParametersInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput"></a>

```typescript
public readonly additionalParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildServiceTypeInput`<sup>Optional</sup> <a name="buildServiceTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput"></a>

```typescript
public readonly buildServiceTypeInput: string;
```

- *Type:* string

---

##### `jenkinsUrlInput`<sup>Optional</sup> <a name="jenkinsUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput"></a>

```typescript
public readonly jenkinsUrlInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `patSecretIdInput`<sup>Optional</sup> <a name="patSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput"></a>

```typescript
public readonly patSecretIdInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `triggerSecretIdInput`<sup>Optional</sup> <a name="triggerSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput"></a>

```typescript
public readonly triggerSecretIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildServiceType`<sup>Required</sup> <a name="buildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```typescript
public readonly buildServiceType: string;
```

- *Type:* string

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```typescript
public readonly jenkinsUrl: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```typescript
public readonly patSecretId: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `triggerSecretId`<sup>Required</sup> <a name="triggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```typescript
public readonly triggerSecretId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AdmRemediationRecipeVerifyConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---



