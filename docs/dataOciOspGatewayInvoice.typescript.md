# `dataOciOspGatewayInvoice` Submodule <a name="`dataOciOspGatewayInvoice` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoice <a name="DataOciOspGatewayInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice oci_osp_gateway_invoice}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoice(scope: Construct, id: string, config: DataOciOspGatewayInvoiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig">DataOciOspGatewayInvoiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig">DataOciOspGatewayInvoiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount">invoiceAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted">invoiceAmountAdjusted</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied">invoiceAmountApplied</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited">invoiceAmountCredited</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue">invoiceAmountDue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId">invoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber">invoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber">invoicePoNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber">invoiceRefNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus">invoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType">invoiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable">isCreditCardPayable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf">isDisplayDownloadPdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable">isPayable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable">isPdfEmailAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail">lastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms">paymentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail">preferredEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax">tax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice">timeInvoice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue">timeInvoiceDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput">internalInvoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId">internalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress"></a>

```typescript
public readonly billToAddress: DataOciOspGatewayInvoiceBillToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a>

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency"></a>

```typescript
public readonly currency: DataOciOspGatewayInvoiceCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a>

---

##### `invoiceAmount`<sup>Required</sup> <a name="invoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount"></a>

```typescript
public readonly invoiceAmount: number;
```

- *Type:* number

---

##### `invoiceAmountAdjusted`<sup>Required</sup> <a name="invoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted"></a>

```typescript
public readonly invoiceAmountAdjusted: number;
```

- *Type:* number

---

##### `invoiceAmountApplied`<sup>Required</sup> <a name="invoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied"></a>

```typescript
public readonly invoiceAmountApplied: number;
```

- *Type:* number

---

##### `invoiceAmountCredited`<sup>Required</sup> <a name="invoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited"></a>

```typescript
public readonly invoiceAmountCredited: number;
```

- *Type:* number

---

##### `invoiceAmountDue`<sup>Required</sup> <a name="invoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue"></a>

```typescript
public readonly invoiceAmountDue: number;
```

- *Type:* number

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId"></a>

```typescript
public readonly invoiceId: string;
```

- *Type:* string

---

##### `invoiceNumber`<sup>Required</sup> <a name="invoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber"></a>

```typescript
public readonly invoiceNumber: string;
```

- *Type:* string

---

##### `invoicePoNumber`<sup>Required</sup> <a name="invoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber"></a>

```typescript
public readonly invoicePoNumber: string;
```

- *Type:* string

---

##### `invoiceRefNumber`<sup>Required</sup> <a name="invoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber"></a>

```typescript
public readonly invoiceRefNumber: string;
```

- *Type:* string

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus"></a>

```typescript
public readonly invoiceStatus: string;
```

- *Type:* string

---

##### `invoiceType`<sup>Required</sup> <a name="invoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType"></a>

```typescript
public readonly invoiceType: string;
```

- *Type:* string

---

##### `isCreditCardPayable`<sup>Required</sup> <a name="isCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable"></a>

```typescript
public readonly isCreditCardPayable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDisplayDownloadPdf`<sup>Required</sup> <a name="isDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf"></a>

```typescript
public readonly isDisplayDownloadPdf: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPayable`<sup>Required</sup> <a name="isPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable"></a>

```typescript
public readonly isPayable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPdfEmailAvailable`<sup>Required</sup> <a name="isPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable"></a>

```typescript
public readonly isPdfEmailAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastPaymentDetail`<sup>Required</sup> <a name="lastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail"></a>

```typescript
public readonly lastPaymentDetail: DataOciOspGatewayInvoiceLastPaymentDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a>

---

##### `paymentTerms`<sup>Required</sup> <a name="paymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms"></a>

```typescript
public readonly paymentTerms: string;
```

- *Type:* string

---

##### `preferredEmail`<sup>Required</sup> <a name="preferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail"></a>

```typescript
public readonly preferredEmail: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax"></a>

```typescript
public readonly tax: number;
```

- *Type:* number

---

##### `timeInvoice`<sup>Required</sup> <a name="timeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice"></a>

```typescript
public readonly timeInvoice: string;
```

- *Type:* string

---

##### `timeInvoiceDue`<sup>Required</sup> <a name="timeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue"></a>

```typescript
public readonly timeInvoiceDue: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalInvoiceIdInput`<sup>Optional</sup> <a name="internalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput"></a>

```typescript
public readonly internalInvoiceIdInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId"></a>

```typescript
public readonly internalInvoiceId: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoiceBillToAddress <a name="DataOciOspGatewayInvoiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoiceBillToAddress: dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress = { ... }
```


### DataOciOspGatewayInvoiceBillToAddressCountry <a name="DataOciOspGatewayInvoiceBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoiceBillToAddressCountry: dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry = { ... }
```


### DataOciOspGatewayInvoiceConfig <a name="DataOciOspGatewayInvoiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoiceConfig: dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId">internalInvoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}.

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId"></a>

```typescript
public readonly internalInvoiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoiceCurrency <a name="DataOciOspGatewayInvoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoiceCurrency: dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency = { ... }
```


### DataOciOspGatewayInvoiceLastPaymentDetail <a name="DataOciOspGatewayInvoiceLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoiceLastPaymentDetail: dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoiceBillToAddressCountryList <a name="DataOciOspGatewayInvoiceBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoiceBillToAddressCountryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoiceBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode">ascii3CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId">countryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName">countryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId">languageId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ascii3CountryCode`<sup>Required</sup> <a name="ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```typescript
public readonly ascii3CountryCode: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `countryId`<sup>Required</sup> <a name="countryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId"></a>

```typescript
public readonly countryId: number;
```

- *Type:* number

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName"></a>

```typescript
public readonly countryName: string;
```

- *Type:* string

---

##### `languageId`<sup>Required</sup> <a name="languageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId"></a>

```typescript
public readonly languageId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoiceBillToAddressCountry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a>

---


### DataOciOspGatewayInvoiceBillToAddressList <a name="DataOciOspGatewayInvoiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoiceBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoiceBillToAddressOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4">addressLine4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName">contactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country">country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1"></a>

```typescript
public readonly addressLine1: string;
```

- *Type:* string

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2"></a>

```typescript
public readonly addressLine2: string;
```

- *Type:* string

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3"></a>

```typescript
public readonly addressLine3: string;
```

- *Type:* string

---

##### `addressLine4`<sup>Required</sup> <a name="addressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4"></a>

```typescript
public readonly addressLine4: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName"></a>

```typescript
public readonly contactName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country"></a>

```typescript
public readonly country: DataOciOspGatewayInvoiceBillToAddressCountryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a>

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoiceBillToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a>

---


### DataOciOspGatewayInvoiceCurrencyList <a name="DataOciOspGatewayInvoiceCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoiceCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoiceCurrencyOutputReference <a name="DataOciOspGatewayInvoiceCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint">roundDecimalPoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion">usdConversion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol"></a>

```typescript
public readonly currencySymbol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roundDecimalPoint`<sup>Required</sup> <a name="roundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint"></a>

```typescript
public readonly roundDecimalPoint: number;
```

- *Type:* number

---

##### `usdConversion`<sup>Required</sup> <a name="usdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion"></a>

```typescript
public readonly usdConversion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoiceCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a>

---


### DataOciOspGatewayInvoiceLastPaymentDetailList <a name="DataOciOspGatewayInvoiceLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoiceLastPaymentDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoiceLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoiceLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoice } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber">accountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid">amountPaid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType">cardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting">echeckRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy">paidBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId">paypalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference">paypalReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber">routingNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn">timePaidOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

---

##### `amountPaid`<sup>Required</sup> <a name="amountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid"></a>

```typescript
public readonly amountPaid: number;
```

- *Type:* number

---

##### `cardType`<sup>Required</sup> <a name="cardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType"></a>

```typescript
public readonly cardType: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `echeckRouting`<sup>Required</sup> <a name="echeckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting"></a>

```typescript
public readonly echeckRouting: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paidBy`<sup>Required</sup> <a name="paidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy"></a>

```typescript
public readonly paidBy: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `paypalId`<sup>Required</sup> <a name="paypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId"></a>

```typescript
public readonly paypalId: string;
```

- *Type:* string

---

##### `paypalReference`<sup>Required</sup> <a name="paypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference"></a>

```typescript
public readonly paypalReference: string;
```

- *Type:* string

---

##### `routingNumber`<sup>Required</sup> <a name="routingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber"></a>

```typescript
public readonly routingNumber: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `timePaidOn`<sup>Required</sup> <a name="timePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn"></a>

```typescript
public readonly timePaidOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoiceLastPaymentDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a>

---



