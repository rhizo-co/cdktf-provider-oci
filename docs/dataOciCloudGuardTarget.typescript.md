# `dataOciCloudGuardTarget` Submodule <a name="`dataOciCloudGuardTarget` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardTarget <a name="DataOciCloudGuardTarget" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target oci_cloud_guard_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTarget(scope: Construct, id: string, config: DataOciCloudGuardTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig">DataOciCloudGuardTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig">DataOciCloudGuardTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.inheritedByCompartments">inheritedByCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.recipeCount">recipeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetails">targetDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList">DataOciCloudGuardTargetTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetectorRecipes">targetDetectorRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList">DataOciCloudGuardTargetTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResponderRecipes">targetResponderRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList">DataOciCloudGuardTargetTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inheritedByCompartments`<sup>Required</sup> <a name="inheritedByCompartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.inheritedByCompartments"></a>

```typescript
public readonly inheritedByCompartments: string[];
```

- *Type:* string[]

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `recipeCount`<sup>Required</sup> <a name="recipeCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.recipeCount"></a>

```typescript
public readonly recipeCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetDetails`<sup>Required</sup> <a name="targetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetails"></a>

```typescript
public readonly targetDetails: DataOciCloudGuardTargetTargetDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList">DataOciCloudGuardTargetTargetDetailsList</a>

---

##### `targetDetectorRecipes`<sup>Required</sup> <a name="targetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetectorRecipes"></a>

```typescript
public readonly targetDetectorRecipes: DataOciCloudGuardTargetTargetDetectorRecipesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList">DataOciCloudGuardTargetTargetDetectorRecipesList</a>

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `targetResponderRecipes`<sup>Required</sup> <a name="targetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResponderRecipes"></a>

```typescript
public readonly targetResponderRecipes: DataOciCloudGuardTargetTargetResponderRecipesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList">DataOciCloudGuardTargetTargetResponderRecipesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardTargetConfig <a name="DataOciCloudGuardTargetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetConfig: dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#target_id DataOciCloudGuardTarget#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#target_id DataOciCloudGuardTarget#target_id}.

---

### DataOciCloudGuardTargetTargetDetails <a name="DataOciCloudGuardTargetTargetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetails: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails = { ... }
```


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipes <a name="DataOciCloudGuardTargetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipes: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRules: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues = { ... }
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipes <a name="DataOciCloudGuardTargetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipes: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRules <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesResponderRules: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails = { ... }
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations: dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardTargetTargetDetailsList <a name="DataOciCloudGuardTargetTargetDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName">securityZoneDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneId">securityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes">targetSecurityZoneRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails">DataOciCloudGuardTargetTargetDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityZoneDisplayName`<sup>Required</sup> <a name="securityZoneDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```typescript
public readonly securityZoneDisplayName: string;
```

- *Type:* string

---

##### `securityZoneId`<sup>Required</sup> <a name="securityZoneId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneId"></a>

```typescript
public readonly securityZoneId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `targetSecurityZoneRecipes`<sup>Required</sup> <a name="targetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```typescript
public readonly targetSecurityZoneRecipes: DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails">DataOciCloudGuardTargetTargetDetails</a>

---


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">securityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```typescript
public readonly securityPolicies: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```typescript
public readonly values: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```typescript
public readonly listType: string;
```

- *Type:* string

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```typescript
public readonly managedListType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```typescript
public readonly conditionGroups: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```typescript
public readonly isConfigurationAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```typescript
public readonly managedListTypes: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```typescript
public readonly values: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```typescript
public readonly listType: string;
```

- *Type:* string

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```typescript
public readonly managedListType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```typescript
public readonly conditionGroups: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```typescript
public readonly isConfigurationAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```typescript
public readonly managedListTypes: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetDetectorRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetDetectorRecipesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType">detectorRecipeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes">DataOciCloudGuardTargetTargetDetectorRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```typescript
public readonly detectorRecipeId: string;
```

- *Type:* string

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```typescript
public readonly detectorRecipeType: string;
```

- *Type:* string

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```typescript
public readonly detectorRules: DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```typescript
public readonly effectiveDetectorRules: DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetDetectorRecipes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes">DataOciCloudGuardTargetTargetDetectorRecipes</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesList <a name="DataOciCloudGuardTargetTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId">responderRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes">DataOciCloudGuardTargetTargetResponderRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```typescript
public readonly effectiveResponderRules: DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```typescript
public readonly responderRecipeId: string;
```

- *Type:* string

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules"></a>

```typescript
public readonly responderRules: DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes">DataOciCloudGuardTargetTargetResponderRecipes</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardTarget } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules">DataOciCloudGuardTargetTargetResponderRecipesResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardTargetTargetResponderRecipesResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules">DataOciCloudGuardTargetTargetResponderRecipesResponderRules</a>

---



