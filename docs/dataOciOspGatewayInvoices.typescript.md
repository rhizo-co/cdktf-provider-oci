# `dataOciOspGatewayInvoices` Submodule <a name="`dataOciOspGatewayInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoices <a name="DataOciOspGatewayInvoices" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoices(scope: Construct, id: string, config: DataOciOspGatewayInvoicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig">DataOciOspGatewayInvoicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig">DataOciOspGatewayInvoicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId">resetInvoiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText">resetSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd">resetTimeInvoiceEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart">resetTimeInvoiceStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd">resetTimePaymentEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart">resetTimePaymentStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOspGatewayInvoicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvoiceId` <a name="resetInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId"></a>

```typescript
public resetInvoiceId(): void
```

##### `resetSearchText` <a name="resetSearchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText"></a>

```typescript
public resetSearchText(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeInvoiceEnd` <a name="resetTimeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd"></a>

```typescript
public resetTimeInvoiceEnd(): void
```

##### `resetTimeInvoiceStart` <a name="resetTimeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart"></a>

```typescript
public resetTimeInvoiceStart(): void
```

##### `resetTimePaymentEnd` <a name="resetTimePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd"></a>

```typescript
public resetTimePaymentEnd(): void
```

##### `resetTimePaymentStart` <a name="resetTimePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart"></a>

```typescript
public resetTimePaymentStart(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection">invoiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput">invoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput">searchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput">timeInvoiceEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput">timeInvoiceStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput">timePaymentEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput">timePaymentStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput">typeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId">invoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText">searchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status">status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd">timeInvoiceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart">timeInvoiceStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd">timePaymentEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart">timePaymentStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter"></a>

```typescript
public readonly filter: DataOciOspGatewayInvoicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a>

---

##### `invoiceCollection`<sup>Required</sup> <a name="invoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection"></a>

```typescript
public readonly invoiceCollection: DataOciOspGatewayInvoicesInvoiceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOspGatewayInvoicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invoiceIdInput`<sup>Optional</sup> <a name="invoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput"></a>

```typescript
public readonly invoiceIdInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `searchTextInput`<sup>Optional</sup> <a name="searchTextInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput"></a>

```typescript
public readonly searchTextInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `timeInvoiceEndInput`<sup>Optional</sup> <a name="timeInvoiceEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput"></a>

```typescript
public readonly timeInvoiceEndInput: string;
```

- *Type:* string

---

##### `timeInvoiceStartInput`<sup>Optional</sup> <a name="timeInvoiceStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput"></a>

```typescript
public readonly timeInvoiceStartInput: string;
```

- *Type:* string

---

##### `timePaymentEndInput`<sup>Optional</sup> <a name="timePaymentEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput"></a>

```typescript
public readonly timePaymentEndInput: string;
```

- *Type:* string

---

##### `timePaymentStartInput`<sup>Optional</sup> <a name="timePaymentStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput"></a>

```typescript
public readonly timePaymentStartInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput"></a>

```typescript
public readonly typeInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId"></a>

```typescript
public readonly invoiceId: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

##### `searchText`<sup>Required</sup> <a name="searchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText"></a>

```typescript
public readonly searchText: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

##### `timeInvoiceEnd`<sup>Required</sup> <a name="timeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd"></a>

```typescript
public readonly timeInvoiceEnd: string;
```

- *Type:* string

---

##### `timeInvoiceStart`<sup>Required</sup> <a name="timeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart"></a>

```typescript
public readonly timeInvoiceStart: string;
```

- *Type:* string

---

##### `timePaymentEnd`<sup>Required</sup> <a name="timePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd"></a>

```typescript
public readonly timePaymentEnd: string;
```

- *Type:* string

---

##### `timePaymentStart`<sup>Required</sup> <a name="timePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart"></a>

```typescript
public readonly timePaymentStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesConfig <a name="DataOciOspGatewayInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesConfig: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId">invoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText">searchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status">status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd">timeInvoiceEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart">timeInvoiceStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd">timePaymentEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart">timePaymentStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type">type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOspGatewayInvoicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoiceId`<sup>Optional</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId"></a>

```typescript
public readonly invoiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `searchText`<sup>Optional</sup> <a name="searchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText"></a>

```typescript
public readonly searchText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `timeInvoiceEnd`<sup>Optional</sup> <a name="timeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd"></a>

```typescript
public readonly timeInvoiceEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `timeInvoiceStart`<sup>Optional</sup> <a name="timeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart"></a>

```typescript
public readonly timeInvoiceStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `timePaymentEnd`<sup>Optional</sup> <a name="timePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd"></a>

```typescript
public readonly timePaymentEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `timePaymentStart`<sup>Optional</sup> <a name="timePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart"></a>

```typescript
public readonly timePaymentStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

### DataOciOspGatewayInvoicesFilter <a name="DataOciOspGatewayInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesFilter: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}.

---

### DataOciOspGatewayInvoicesInvoiceCollection <a name="DataOciOspGatewayInvoicesInvoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollection: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection = { ... }
```


### DataOciOspGatewayInvoicesInvoiceCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollectionItems: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems = { ... }
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress = { ... }
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry = { ... }
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency = { ... }
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail: dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesFilterList <a name="DataOciOspGatewayInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOspGatewayInvoicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>[]

---


### DataOciOspGatewayInvoicesFilterOutputReference <a name="DataOciOspGatewayInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOspGatewayInvoicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode">ascii3CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId">countryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName">countryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId">languageId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ascii3CountryCode`<sup>Required</sup> <a name="ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```typescript
public readonly ascii3CountryCode: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `countryId`<sup>Required</sup> <a name="countryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId"></a>

```typescript
public readonly countryId: number;
```

- *Type:* number

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName"></a>

```typescript
public readonly countryName: string;
```

- *Type:* string

---

##### `languageId`<sup>Required</sup> <a name="languageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId"></a>

```typescript
public readonly languageId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4">addressLine4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName">contactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country">country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

---

##### `addressLine4`<sup>Required</sup> <a name="addressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4"></a>

```typescript
public readonly addressLine4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country"></a>

```typescript
public readonly country: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a>

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">roundDecimalPoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion">usdConversion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```typescript
public readonly currencySymbol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roundDecimalPoint`<sup>Required</sup> <a name="roundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```typescript
public readonly roundDecimalPoint: number;
```

- *Type:* number

---

##### `usdConversion`<sup>Required</sup> <a name="usdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```typescript
public readonly usdConversion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber">accountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid">amountPaid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType">cardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting">echeckRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy">paidBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId">paypalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference">paypalReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber">routingNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn">timePaidOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

---

##### `amountPaid`<sup>Required</sup> <a name="amountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid"></a>

```typescript
public readonly amountPaid: number;
```

- *Type:* number

---

##### `cardType`<sup>Required</sup> <a name="cardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType"></a>

```typescript
public readonly cardType: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `echeckRouting`<sup>Required</sup> <a name="echeckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting"></a>

```typescript
public readonly echeckRouting: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paidBy`<sup>Required</sup> <a name="paidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy"></a>

```typescript
public readonly paidBy: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `paypalId`<sup>Required</sup> <a name="paypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId"></a>

```typescript
public readonly paypalId: string;
```

- *Type:* string

---

##### `paypalReference`<sup>Required</sup> <a name="paypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference"></a>

```typescript
public readonly paypalReference: string;
```

- *Type:* string

---

##### `routingNumber`<sup>Required</sup> <a name="routingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber"></a>

```typescript
public readonly routingNumber: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `timePaidOn`<sup>Required</sup> <a name="timePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn"></a>

```typescript
public readonly timePaidOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId">internalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount">invoiceAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted">invoiceAmountAdjusted</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied">invoiceAmountApplied</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited">invoiceAmountCredited</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue">invoiceAmountDue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute">invoiceAmountInDispute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId">invoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber">invoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber">invoicePoNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber">invoiceRefNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType">invoiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable">isCreditCardPayable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf">isDisplayDownloadPdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf">isDisplayViewPdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid">isPaid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable">isPayable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed">isPaymentFailed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable">isPdfEmailAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail">lastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName">partyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms">paymentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail">preferredEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax">tax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice">timeInvoice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue">timeInvoiceDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress"></a>

```typescript
public readonly billToAddress: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a>

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a>

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId"></a>

```typescript
public readonly internalInvoiceId: string;
```

- *Type:* string

---

##### `invoiceAmount`<sup>Required</sup> <a name="invoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount"></a>

```typescript
public readonly invoiceAmount: number;
```

- *Type:* number

---

##### `invoiceAmountAdjusted`<sup>Required</sup> <a name="invoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted"></a>

```typescript
public readonly invoiceAmountAdjusted: number;
```

- *Type:* number

---

##### `invoiceAmountApplied`<sup>Required</sup> <a name="invoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied"></a>

```typescript
public readonly invoiceAmountApplied: number;
```

- *Type:* number

---

##### `invoiceAmountCredited`<sup>Required</sup> <a name="invoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited"></a>

```typescript
public readonly invoiceAmountCredited: number;
```

- *Type:* number

---

##### `invoiceAmountDue`<sup>Required</sup> <a name="invoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue"></a>

```typescript
public readonly invoiceAmountDue: number;
```

- *Type:* number

---

##### `invoiceAmountInDispute`<sup>Required</sup> <a name="invoiceAmountInDispute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute"></a>

```typescript
public readonly invoiceAmountInDispute: number;
```

- *Type:* number

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId"></a>

```typescript
public readonly invoiceId: string;
```

- *Type:* string

---

##### `invoiceNumber`<sup>Required</sup> <a name="invoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber"></a>

```typescript
public readonly invoiceNumber: string;
```

- *Type:* string

---

##### `invoicePoNumber`<sup>Required</sup> <a name="invoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber"></a>

```typescript
public readonly invoicePoNumber: string;
```

- *Type:* string

---

##### `invoiceRefNumber`<sup>Required</sup> <a name="invoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber"></a>

```typescript
public readonly invoiceRefNumber: string;
```

- *Type:* string

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus"></a>

```typescript
public readonly invoiceStatus: string;
```

- *Type:* string

---

##### `invoiceType`<sup>Required</sup> <a name="invoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType"></a>

```typescript
public readonly invoiceType: string;
```

- *Type:* string

---

##### `isCreditCardPayable`<sup>Required</sup> <a name="isCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable"></a>

```typescript
public readonly isCreditCardPayable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisplayDownloadPdf`<sup>Required</sup> <a name="isDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf"></a>

```typescript
public readonly isDisplayDownloadPdf: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisplayViewPdf`<sup>Required</sup> <a name="isDisplayViewPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf"></a>

```typescript
public readonly isDisplayViewPdf: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPaid`<sup>Required</sup> <a name="isPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid"></a>

```typescript
public readonly isPaid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPayable`<sup>Required</sup> <a name="isPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable"></a>

```typescript
public readonly isPayable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPaymentFailed`<sup>Required</sup> <a name="isPaymentFailed" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed"></a>

```typescript
public readonly isPaymentFailed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPdfEmailAvailable`<sup>Required</sup> <a name="isPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable"></a>

```typescript
public readonly isPdfEmailAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastPaymentDetail`<sup>Required</sup> <a name="lastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail"></a>

```typescript
public readonly lastPaymentDetail: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a>

---

##### `partyName`<sup>Required</sup> <a name="partyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName"></a>

```typescript
public readonly partyName: string;
```

- *Type:* string

---

##### `paymentTerms`<sup>Required</sup> <a name="paymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms"></a>

```typescript
public readonly paymentTerms: string;
```

- *Type:* string

---

##### `preferredEmail`<sup>Required</sup> <a name="preferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail"></a>

```typescript
public readonly preferredEmail: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax"></a>

```typescript
public readonly tax: number;
```

- *Type:* number

---

##### `timeInvoice`<sup>Required</sup> <a name="timeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice"></a>

```typescript
public readonly timeInvoice: string;
```

- *Type:* string

---

##### `timeInvoiceDue`<sup>Required</sup> <a name="timeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue"></a>

```typescript
public readonly timeInvoiceDue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionList <a name="DataOciOspGatewayInvoicesInvoiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoices } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOspGatewayInvoicesInvoiceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a>

---



