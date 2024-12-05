# `dataOciOspGatewayInvoicesInvoiceLine` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLine <a name="DataOciOspGatewayInvoicesInvoiceLine" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line oci_osp_gateway_invoices_invoice_line}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine(scope: Construct, id: string, config: DataOciOspGatewayInvoicesInvoiceLineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoicesInvoiceLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput">internalInvoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId">internalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items"></a>

```typescript
public readonly items: DataOciOspGatewayInvoicesInvoiceLineItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalInvoiceIdInput`<sup>Optional</sup> <a name="internalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput"></a>

```typescript
public readonly internalInvoiceIdInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId"></a>

```typescript
public readonly internalInvoiceId: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLineConfig <a name="DataOciOspGatewayInvoicesInvoiceLineConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceLineConfig: dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId">internalInvoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}.

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId"></a>

```typescript
public readonly internalInvoiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLineItems <a name="DataOciOspGatewayInvoicesInvoiceLineItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceLineItems: dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems = { ... }
```


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayInvoicesInvoiceLineItemsCurrency: dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint">roundDecimalPoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion">usdConversion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol"></a>

```typescript
public readonly currencySymbol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roundDecimalPoint`<sup>Required</sup> <a name="roundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```typescript
public readonly roundDecimalPoint: number;
```

- *Type:* number

---

##### `usdConversion`<sup>Required</sup> <a name="usdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion"></a>

```typescript
public readonly usdConversion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceLineItemsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLineItemsList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get"></a>

```typescript
public get(index: number): DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewayInvoicesInvoiceLine } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo">orderNo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity">quantity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice">totalPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a>

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: number;
```

- *Type:* number

---

##### `orderNo`<sup>Required</sup> <a name="orderNo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo"></a>

```typescript
public readonly orderNo: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `totalPrice`<sup>Required</sup> <a name="totalPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice"></a>

```typescript
public readonly totalPrice: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewayInvoicesInvoiceLineItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a>

---



