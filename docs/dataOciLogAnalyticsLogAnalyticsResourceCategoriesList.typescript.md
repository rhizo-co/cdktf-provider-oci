# `dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list oci_log_analytics_log_analytics_resource_categories_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories">resetResourceCategories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceCategories` <a name="resetResourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories"></a>

```typescript
public resetResourceCategories(): void
```

##### `resetResourceIds` <a name="resetResourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds"></a>

```typescript
public resetResourceIds(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsResourceCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories">categories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput">resourceCategoriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput">resourceIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories">resourceCategories</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds">resourceIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes">resourceTypes</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `categories`<sup>Required</sup> <a name="categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories"></a>

```typescript
public readonly categories: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceCategoriesInput`<sup>Optional</sup> <a name="resourceCategoriesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput"></a>

```typescript
public readonly resourceCategoriesInput: string;
```

- *Type:* string

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput"></a>

```typescript
public readonly resourceIdsInput: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceCategories`<sup>Required</sup> <a name="resourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories"></a>

```typescript
public readonly resourceCategories: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds"></a>

```typescript
public readonly resourceIds: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories: dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories = { ... }
```


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig: dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories">resourceCategories</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds">resourceIds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes">resourceTypes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceCategories`<sup>Optional</sup> <a name="resourceCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories"></a>

```typescript
public readonly resourceCategories: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}.

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds"></a>

```typescript
public readonly resourceIds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}.

---

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems: dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem">isSystem</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isSystem`<sup>Required</sup> <a name="isSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem"></a>

```typescript
public readonly isSystem: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a>

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsResourceCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName">categoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem">isSystem</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

---

##### `isSystem`<sup>Required</sup> <a name="isSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem"></a>

```typescript
public readonly isSystem: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a>

---



