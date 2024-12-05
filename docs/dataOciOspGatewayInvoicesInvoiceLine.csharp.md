# `dataOciOspGatewayInvoicesInvoiceLine` Submodule <a name="`dataOciOspGatewayInvoicesInvoiceLine` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoicesInvoiceLine <a name="DataOciOspGatewayInvoicesInvoiceLine" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line oci_osp_gateway_invoices_invoice_line}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLine(Construct Scope, string Id, DataOciOspGatewayInvoicesInvoiceLineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig">DataOciOspGatewayInvoicesInvoiceLineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoicesInvoiceLine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoicesInvoiceLine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoicesInvoiceLine.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoicesInvoiceLine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOspGatewayInvoicesInvoiceLine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoicesInvoiceLine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoicesInvoiceLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoicesInvoiceLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput">InternalInvoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.items"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceLineItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList">DataOciOspGatewayInvoicesInvoiceLineItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalInvoiceIdInput`<sup>Optional</sup> <a name="InternalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceIdInput"></a>

```csharp
public string InternalInvoiceIdInput { get; }
```

- *Type:* string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegionInput"></a>

```csharp
public string OspHomeRegionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.internalInvoiceId"></a>

```csharp
public string InternalInvoiceId { get; }
```

- *Type:* string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesInvoiceLineConfig <a name="DataOciOspGatewayInvoicesInvoiceLineConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string InternalInvoiceId,
    string OspHomeRegion,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#compartment_id DataOciOspGatewayInvoicesInvoiceLine#compartment_id}.

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.internalInvoiceId"></a>

```csharp
public string InternalInvoiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#internal_invoice_id DataOciOspGatewayInvoicesInvoiceLine#internal_invoice_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#osp_home_region DataOciOspGatewayInvoicesInvoiceLine#osp_home_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices_invoice_line#id DataOciOspGatewayInvoicesInvoiceLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoicesInvoiceLineItems <a name="DataOciOspGatewayInvoicesInvoiceLineItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItems {

};
```


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItemsCurrency {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint">RoundDecimalPoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion">UsdConversion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.currencySymbol"></a>

```csharp
public string CurrencySymbol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoundDecimalPoint`<sup>Required</sup> <a name="RoundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```csharp
public double RoundDecimalPoint { get; }
```

- *Type:* double

---

##### `UsdConversion`<sup>Required</sup> <a name="UsdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.usdConversion"></a>

```csharp
public double UsdConversion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceLineItemsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrency">DataOciOspGatewayInvoicesInvoiceLineItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceLineItemsList <a name="DataOciOspGatewayInvoicesInvoiceLineItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo">OrderNo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity">Quantity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice">TotalPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.currency"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceLineItemsCurrencyList</a>

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.netUnitPrice"></a>

```csharp
public double NetUnitPrice { get; }
```

- *Type:* double

---

##### `OrderNo`<sup>Required</sup> <a name="OrderNo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.orderNo"></a>

```csharp
public string OrderNo { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.quantity"></a>

```csharp
public double Quantity { get; }
```

- *Type:* double

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TotalPrice`<sup>Required</sup> <a name="TotalPrice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.totalPrice"></a>

```csharp
public double TotalPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceLineItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoicesInvoiceLine.DataOciOspGatewayInvoicesInvoiceLineItems">DataOciOspGatewayInvoicesInvoiceLineItems</a>

---



