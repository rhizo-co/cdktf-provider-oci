# `dataOciCloudGuardResponderRecipe` Submodule <a name="`dataOciCloudGuardResponderRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardResponderRecipe <a name="DataOciCloudGuardResponderRecipe" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe oci_cloud_guard_responder_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe(scope: Construct, id: string, config: DataOciCloudGuardResponderRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig">DataOciCloudGuardResponderRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig">DataOciCloudGuardResponderRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardResponderRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardResponderRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardResponderRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList">DataOciCloudGuardResponderRecipeResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.sourceResponderRecipeId">sourceResponderRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeIdInput">responderRecipeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeId">responderRecipeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.effectiveResponderRules"></a>

```typescript
public readonly effectiveResponderRules: DataOciCloudGuardResponderRecipeEffectiveResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRules"></a>

```typescript
public readonly responderRules: DataOciCloudGuardResponderRecipeResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList">DataOciCloudGuardResponderRecipeResponderRulesList</a>

---

##### `sourceResponderRecipeId`<sup>Required</sup> <a name="sourceResponderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.sourceResponderRecipeId"></a>

```typescript
public readonly sourceResponderRecipeId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `responderRecipeIdInput`<sup>Optional</sup> <a name="responderRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeIdInput"></a>

```typescript
public readonly responderRecipeIdInput: string;
```

- *Type:* string

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeId"></a>

```typescript
public readonly responderRecipeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardResponderRecipeConfig <a name="DataOciCloudGuardResponderRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeConfig: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.responderRecipeId">responderRecipeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.responderRecipeId"></a>

```typescript
public readonly responderRecipeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}.

---

### DataOciCloudGuardResponderRecipeEffectiveResponderRules <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeEffectiveResponderRules: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules = { ... }
```


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails = { ... }
```


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardResponderRecipeResponderRules <a name="DataOciCloudGuardResponderRecipeResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeResponderRules: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules = { ... }
```


### DataOciCloudGuardResponderRecipeResponderRulesDetails <a name="DataOciCloudGuardResponderRecipeResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeResponderRulesDetails: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails = { ... }
```


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations: dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules">DataOciCloudGuardResponderRecipeEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeEffectiveResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules">DataOciCloudGuardResponderRecipeEffectiveResponderRules</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails">DataOciCloudGuardResponderRecipeResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails">DataOciCloudGuardResponderRecipeResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesList <a name="DataOciCloudGuardResponderRecipeResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipeResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipeResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipe } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules">DataOciCloudGuardResponderRecipeResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardResponderRecipeResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipeResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules">DataOciCloudGuardResponderRecipeResponderRules</a>

---



