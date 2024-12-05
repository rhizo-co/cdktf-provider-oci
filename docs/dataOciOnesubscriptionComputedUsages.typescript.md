# `dataOciOnesubscriptionComputedUsages` Submodule <a name="`dataOciOnesubscriptionComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionComputedUsages <a name="DataOciOnesubscriptionComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages oci_onesubscription_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages(scope: Construct, id: string, config: DataOciOnesubscriptionComputedUsagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig">DataOciOnesubscriptionComputedUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig">DataOciOnesubscriptionComputedUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetComputedProduct">resetComputedProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetParentProduct">resetParentProduct</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionComputedUsagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]

---

##### `resetComputedProduct` <a name="resetComputedProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetComputedProduct"></a>

```typescript
public resetComputedProduct(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentProduct` <a name="resetParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetParentProduct"></a>

```typescript
public resetParentProduct(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedUsages">computedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList">DataOciOnesubscriptionComputedUsagesComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList">DataOciOnesubscriptionComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProductInput">computedProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProductInput">parentProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFromInput">timeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeToInput">timeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProduct">computedProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProduct">parentProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFrom">timeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeTo">timeTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computedUsages`<sup>Required</sup> <a name="computedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedUsages"></a>

```typescript
public readonly computedUsages: DataOciOnesubscriptionComputedUsagesComputedUsagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList">DataOciOnesubscriptionComputedUsagesComputedUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionComputedUsagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList">DataOciOnesubscriptionComputedUsagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computedProductInput`<sup>Optional</sup> <a name="computedProductInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProductInput"></a>

```typescript
public readonly computedProductInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentProductInput`<sup>Optional</sup> <a name="parentProductInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProductInput"></a>

```typescript
public readonly parentProductInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeFromInput`<sup>Optional</sup> <a name="timeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFromInput"></a>

```typescript
public readonly timeFromInput: string;
```

- *Type:* string

---

##### `timeToInput`<sup>Optional</sup> <a name="timeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeToInput"></a>

```typescript
public readonly timeToInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computedProduct`<sup>Required</sup> <a name="computedProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProduct"></a>

```typescript
public readonly computedProduct: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProduct"></a>

```typescript
public readonly parentProduct: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFrom"></a>

```typescript
public readonly timeFrom: string;
```

- *Type:* string

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeTo"></a>

```typescript
public readonly timeTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionComputedUsagesComputedUsages <a name="DataOciOnesubscriptionComputedUsagesComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionComputedUsagesComputedUsages: dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages = { ... }
```


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct: dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct = { ... }
```


### DataOciOnesubscriptionComputedUsagesComputedUsagesProduct <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionComputedUsagesComputedUsagesProduct: dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct = { ... }
```


### DataOciOnesubscriptionComputedUsagesConfig <a name="DataOciOnesubscriptionComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionComputedUsagesConfig: dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeFrom">timeFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeTo">timeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.computedProduct">computedProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.parentProduct">parentProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}.

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeFrom"></a>

```typescript
public readonly timeFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}.

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeTo"></a>

```typescript
public readonly timeTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}.

---

##### `computedProduct`<sup>Optional</sup> <a name="computedProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.computedProduct"></a>

```typescript
public readonly computedProduct: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#filter DataOciOnesubscriptionComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentProduct`<sup>Optional</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.parentProduct"></a>

```typescript
public readonly parentProduct: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}.

---

### DataOciOnesubscriptionComputedUsagesFilter <a name="DataOciOnesubscriptionComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionComputedUsagesFilter: dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#name DataOciOnesubscriptionComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#values DataOciOnesubscriptionComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#regex DataOciOnesubscriptionComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#name DataOciOnesubscriptionComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#values DataOciOnesubscriptionComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#regex DataOciOnesubscriptionComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionComputedUsagesComputedUsagesList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId">commitmentServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computedUsageId">computedUsageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computeSource">computeSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.cost">cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.costRounded">costRounded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.isInvoiced">isInvoiced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.mqsMessageId">mqsMessageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber">originalUsageNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId">parentSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.planNumber">planNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardId">rateCardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId">rateCardTierdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn">timeMeteredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeOfArrival">timeOfArrival</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.usageNumber">usageNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages">DataOciOnesubscriptionComputedUsagesComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentServiceId`<sup>Required</sup> <a name="commitmentServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId"></a>

```typescript
public readonly commitmentServiceId: string;
```

- *Type:* string

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computedUsageId"></a>

```typescript
public readonly computedUsageId: string;
```

- *Type:* string

---

##### `computeSource`<sup>Required</sup> <a name="computeSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computeSource"></a>

```typescript
public readonly computeSource: string;
```

- *Type:* string

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.cost"></a>

```typescript
public readonly cost: string;
```

- *Type:* string

---

##### `costRounded`<sup>Required</sup> <a name="costRounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.costRounded"></a>

```typescript
public readonly costRounded: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isInvoiced`<sup>Required</sup> <a name="isInvoiced" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.isInvoiced"></a>

```typescript
public readonly isInvoiced: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mqsMessageId`<sup>Required</sup> <a name="mqsMessageId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.mqsMessageId"></a>

```typescript
public readonly mqsMessageId: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `originalUsageNumber`<sup>Required</sup> <a name="originalUsageNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber"></a>

```typescript
public readonly originalUsageNumber: string;
```

- *Type:* string

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentProduct"></a>

```typescript
public readonly parentProduct: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList</a>

---

##### `parentSubscribedServiceId`<sup>Required</sup> <a name="parentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```typescript
public readonly parentSubscribedServiceId: string;
```

- *Type:* string

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionComputedUsagesComputedUsagesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `rateCardId`<sup>Required</sup> <a name="rateCardId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardId"></a>

```typescript
public readonly rateCardId: string;
```

- *Type:* string

---

##### `rateCardTierdId`<sup>Required</sup> <a name="rateCardTierdId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId"></a>

```typescript
public readonly rateCardTierdId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn"></a>

```typescript
public readonly timeMeteredOn: string;
```

- *Type:* string

---

##### `timeOfArrival`<sup>Required</sup> <a name="timeOfArrival" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeOfArrival"></a>

```typescript
public readonly timeOfArrival: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `usageNumber`<sup>Required</sup> <a name="usageNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.usageNumber"></a>

```typescript
public readonly usageNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionComputedUsagesComputedUsages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages">DataOciOnesubscriptionComputedUsagesComputedUsages</a>

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesProductList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionComputedUsagesComputedUsagesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesProduct</a>

---


### DataOciOnesubscriptionComputedUsagesFilterList <a name="DataOciOnesubscriptionComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>[]

---


### DataOciOnesubscriptionComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionComputedUsagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>

---



