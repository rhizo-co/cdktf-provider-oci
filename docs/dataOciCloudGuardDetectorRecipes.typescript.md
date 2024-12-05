# `dataOciCloudGuardDetectorRecipes` Submodule <a name="`dataOciCloudGuardDetectorRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipes <a name="DataOciCloudGuardDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes(scope: Construct, id: string, config: DataOciCloudGuardDetectorRecipesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly">resetResourceMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardDetectorRecipesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceMetadataOnly` <a name="resetResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly"></a>

```typescript
public resetResourceMetadataOnly(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDetectorRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection">detectorRecipeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput">resourceMetadataOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly">resourceMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `detectorRecipeCollection`<sup>Required</sup> <a name="detectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection"></a>

```typescript
public readonly detectorRecipeCollection: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardDetectorRecipesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardDetectorRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceMetadataOnlyInput`<sup>Optional</sup> <a name="resourceMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput"></a>

```typescript
public readonly resourceMetadataOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceMetadataOnly`<sup>Required</sup> <a name="resourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly"></a>

```typescript
public readonly resourceMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipesConfig <a name="DataOciCloudGuardDetectorRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesConfig: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly">resourceMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardDetectorRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceMetadataOnly`<sup>Optional</sup> <a name="resourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly"></a>

```typescript
public readonly resourceMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}.

---

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollection <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollection: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings = { ... }
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings = { ... }
```


### DataOciCloudGuardDetectorRecipesFilter <a name="DataOciCloudGuardDetectorRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDetectorRecipesFilter: dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```typescript
public readonly isPreferred: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```typescript
public readonly values: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```typescript
public readonly listType: string;
```

- *Type:* string

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```typescript
public readonly managedListType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```typescript
public readonly isConfigurationAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules"></a>

```typescript
public readonly candidateResponderRules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes"></a>

```typescript
public readonly managedListTypes: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```typescript
public readonly isPreferred: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```typescript
public readonly values: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```typescript
public readonly listType: string;
```

- *Type:* string

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```typescript
public readonly managedListType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```typescript
public readonly isConfigurationAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```typescript
public readonly queryField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```typescript
public readonly candidateResponderRules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```typescript
public readonly entitiesMappings: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```typescript
public readonly managedListTypes: string[];
```

- *Type:* string[]

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector">detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType">detectorRecipeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId">sourceDetectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector"></a>

```typescript
public readonly detector: string;
```

- *Type:* string

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType"></a>

```typescript
public readonly detectorRecipeType: string;
```

- *Type:* string

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules"></a>

```typescript
public readonly detectorRules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules"></a>

```typescript
public readonly effectiveDetectorRules: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `sourceDetectorRecipeId`<sup>Required</sup> <a name="sourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId"></a>

```typescript
public readonly sourceDetectorRecipeId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDetectorRecipesDetectorRecipeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a>

---


### DataOciCloudGuardDetectorRecipesFilterList <a name="DataOciCloudGuardDetectorRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDetectorRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDetectorRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>[]

---


### DataOciCloudGuardDetectorRecipesFilterOutputReference <a name="DataOciCloudGuardDetectorRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDetectorRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDetectorRecipesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter">DataOciCloudGuardDetectorRecipesFilter</a>

---



