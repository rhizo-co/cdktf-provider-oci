# `dataOciOnesubscriptionAggregatedComputedUsages` Submodule <a name="`dataOciOnesubscriptionAggregatedComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages oci_onesubscription_aggregated_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages(scope: Construct, id: string, config: DataOciOnesubscriptionAggregatedComputedUsagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig">DataOciOnesubscriptionAggregatedComputedUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig">DataOciOnesubscriptionAggregatedComputedUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping">resetGrouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct">resetParentProduct</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionAggregatedComputedUsagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGrouping` <a name="resetGrouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping"></a>

```typescript
public resetGrouping(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentProduct` <a name="resetParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct"></a>

```typescript
public resetParentProduct(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionAggregatedComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionAggregatedComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionAggregatedComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages">aggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput">groupingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput">parentProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput">timeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput">timeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping">grouping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct">parentProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom">timeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo">timeTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aggregatedComputedUsages`<sup>Required</sup> <a name="aggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages"></a>

```typescript
public readonly aggregatedComputedUsages: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionAggregatedComputedUsagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionAggregatedComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput"></a>

```typescript
public readonly groupingInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentProductInput`<sup>Optional</sup> <a name="parentProductInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput"></a>

```typescript
public readonly parentProductInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeFromInput`<sup>Optional</sup> <a name="timeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput"></a>

```typescript
public readonly timeFromInput: string;
```

- *Type:* string

---

##### `timeToInput`<sup>Optional</sup> <a name="timeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput"></a>

```typescript
public readonly timeToInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping"></a>

```typescript
public readonly grouping: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct"></a>

```typescript
public readonly parentProduct: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom"></a>

```typescript
public readonly timeFrom: string;
```

- *Type:* string

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo"></a>

```typescript
public readonly timeTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages = { ... }
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages = { ... }
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct = { ... }
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct = { ... }
```


### DataOciOnesubscriptionAggregatedComputedUsagesConfig <a name="DataOciOnesubscriptionAggregatedComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesConfig: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom">timeFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo">timeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping">grouping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct">parentProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}.

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom"></a>

```typescript
public readonly timeFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}.

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo"></a>

```typescript
public readonly timeTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionAggregatedComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#filter DataOciOnesubscriptionAggregatedComputedUsages#filter}

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping"></a>

```typescript
public readonly grouping: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentProduct`<sup>Optional</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct"></a>

```typescript
public readonly parentProduct: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}.

---

### DataOciOnesubscriptionAggregatedComputedUsagesFilter <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionAggregatedComputedUsagesFilter: dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost">cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded">costUnrounded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn">timeMeteredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost"></a>

```typescript
public readonly cost: string;
```

- *Type:* string

---

##### `costUnrounded`<sup>Required</sup> <a name="costUnrounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded"></a>

```typescript
public readonly costUnrounded: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn"></a>

```typescript
public readonly timeMeteredOn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages">aggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId">parentSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber">planNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel">pricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId">rateCardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatedComputedUsages`<sup>Required</sup> <a name="aggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages"></a>

```typescript
public readonly aggregatedComputedUsages: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct"></a>

```typescript
public readonly parentProduct: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a>

---

##### `parentSubscribedServiceId`<sup>Required</sup> <a name="parentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```typescript
public readonly parentSubscribedServiceId: string;
```

- *Type:* string

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel"></a>

```typescript
public readonly pricingModel: string;
```

- *Type:* string

---

##### `rateCardId`<sup>Required</sup> <a name="rateCardId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId"></a>

```typescript
public readonly rateCardId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterList <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionAggregatedComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>[]

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionAggregatedComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionAggregatedComputedUsagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>

---



