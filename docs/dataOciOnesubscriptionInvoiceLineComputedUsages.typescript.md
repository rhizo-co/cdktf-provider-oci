# `dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule <a name="`dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages(scope: Construct, id: string, config: DataOciOnesubscriptionInvoiceLineComputedUsagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig">DataOciOnesubscriptionInvoiceLineComputedUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig">DataOciOnesubscriptionInvoiceLineComputedUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionInvoiceLineComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionInvoiceLineComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoiceLineComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages">invoicelineComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput">invoiceLineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId">invoiceLineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a>

---

##### `invoicelineComputedUsages`<sup>Required</sup> <a name="invoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages"></a>

```typescript
public readonly invoicelineComputedUsages: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invoiceLineIdInput`<sup>Optional</sup> <a name="invoiceLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput"></a>

```typescript
public readonly invoiceLineIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invoiceLineId`<sup>Required</sup> <a name="invoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId"></a>

```typescript
public readonly invoiceLineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesConfig <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionInvoiceLineComputedUsagesConfig: dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId">invoiceLineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `invoiceLineId`<sup>Required</sup> <a name="invoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId"></a>

```typescript
public readonly invoiceLineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilter <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionInvoiceLineComputedUsagesFilter: dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages: dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages = { ... }
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct: dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct = { ... }
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct: dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionInvoiceLineComputedUsagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>[]

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionInvoiceLineComputedUsagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost">cost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded">costRounded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn">timeMeteredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost"></a>

```typescript
public readonly cost: number;
```

- *Type:* number

---

##### `costRounded`<sup>Required</sup> <a name="costRounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded"></a>

```typescript
public readonly costRounded: number;
```

- *Type:* number

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: number;
```

- *Type:* number

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct"></a>

```typescript
public readonly parentProduct: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a>

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn"></a>

```typescript
public readonly timeMeteredOn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionInvoiceLineComputedUsages } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a>

---



