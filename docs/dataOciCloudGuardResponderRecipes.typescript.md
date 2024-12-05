# `dataOciCloudGuardResponderRecipes` Submodule <a name="`dataOciCloudGuardResponderRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardResponderRecipes <a name="DataOciCloudGuardResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes oci_cloud_guard_responder_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes(scope: Construct, id: string, config: DataOciCloudGuardResponderRecipesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig">DataOciCloudGuardResponderRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig">DataOciCloudGuardResponderRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetResourceMetadataOnly">resetResourceMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardResponderRecipesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceMetadataOnly` <a name="resetResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetResourceMetadataOnly"></a>

```typescript
public resetResourceMetadataOnly(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardResponderRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardResponderRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardResponderRecipes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardResponderRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardResponderRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList">DataOciCloudGuardResponderRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.responderRecipeCollection">responderRecipeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnlyInput">resourceMetadataOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnly">resourceMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardResponderRecipesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList">DataOciCloudGuardResponderRecipesFilterList</a>

---

##### `responderRecipeCollection`<sup>Required</sup> <a name="responderRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.responderRecipeCollection"></a>

```typescript
public readonly responderRecipeCollection: DataOciCloudGuardResponderRecipesResponderRecipeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardResponderRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceMetadataOnlyInput`<sup>Optional</sup> <a name="resourceMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnlyInput"></a>

```typescript
public readonly resourceMetadataOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceMetadataOnly`<sup>Required</sup> <a name="resourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.resourceMetadataOnly"></a>

```typescript
public readonly resourceMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardResponderRecipesConfig <a name="DataOciCloudGuardResponderRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesConfig: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.resourceMetadataOnly">resourceMetadataOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id DataOciCloudGuardResponderRecipes#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#access_level DataOciCloudGuardResponderRecipes#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#compartment_id_in_subtree DataOciCloudGuardResponderRecipes#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#display_name DataOciCloudGuardResponderRecipes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardResponderRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#filter DataOciCloudGuardResponderRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#id DataOciCloudGuardResponderRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceMetadataOnly`<sup>Optional</sup> <a name="resourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.resourceMetadataOnly"></a>

```typescript
public readonly resourceMetadataOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#resource_metadata_only DataOciCloudGuardResponderRecipes#resource_metadata_only}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#state DataOciCloudGuardResponderRecipes#state}.

---

### DataOciCloudGuardResponderRecipesFilter <a name="DataOciCloudGuardResponderRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesFilter: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#name DataOciCloudGuardResponderRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#values DataOciCloudGuardResponderRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#regex DataOciCloudGuardResponderRecipes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#name DataOciCloudGuardResponderRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#values DataOciCloudGuardResponderRecipes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipes#regex DataOciCloudGuardResponderRecipes#regex}.

---

### DataOciCloudGuardResponderRecipesResponderRecipeCollection <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollection: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItems: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails = { ... }
```


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations: dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardResponderRecipesFilterList <a name="DataOciCloudGuardResponderRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardResponderRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>[]

---


### DataOciCloudGuardResponderRecipesFilterOutputReference <a name="DataOciCloudGuardResponderRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardResponderRecipesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesFilter">DataOciCloudGuardResponderRecipesFilter</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRules</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.sourceResponderRecipeId">sourceResponderRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.effectiveResponderRules"></a>

```typescript
public readonly effectiveResponderRules: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsEffectiveResponderRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.responderRules"></a>

```typescript
public readonly responderRules: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList</a>

---

##### `sourceResponderRecipeId`<sup>Required</sup> <a name="sourceResponderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.sourceResponderRecipeId"></a>

```typescript
public readonly sourceResponderRecipeId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItems</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.responderRuleId"></a>

```typescript
public readonly responderRuleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.supportedModes"></a>

```typescript
public readonly supportedModes: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsResponderRules</a>

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionList <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference <a name="DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardResponderRecipes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection">DataOciCloudGuardResponderRecipesResponderRecipeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList">DataOciCloudGuardResponderRecipesResponderRecipeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardResponderRecipesResponderRecipeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipes.DataOciCloudGuardResponderRecipesResponderRecipeCollection">DataOciCloudGuardResponderRecipesResponderRecipeCollection</a>

---



