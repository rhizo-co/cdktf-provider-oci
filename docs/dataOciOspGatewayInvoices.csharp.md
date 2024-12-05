# `dataOciOspGatewayInvoices` Submodule <a name="`dataOciOspGatewayInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoices <a name="DataOciOspGatewayInvoices" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoices(Construct Scope, string Id, DataOciOspGatewayInvoicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig">DataOciOspGatewayInvoicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig">DataOciOspGatewayInvoicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId">ResetInvoiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText">ResetSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd">ResetTimeInvoiceEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart">ResetTimeInvoiceStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd">ResetTimePaymentEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart">ResetTimePaymentStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInvoiceId` <a name="ResetInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId"></a>

```csharp
private void ResetInvoiceId()
```

##### `ResetSearchText` <a name="ResetSearchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText"></a>

```csharp
private void ResetSearchText()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeInvoiceEnd` <a name="ResetTimeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd"></a>

```csharp
private void ResetTimeInvoiceEnd()
```

##### `ResetTimeInvoiceStart` <a name="ResetTimeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart"></a>

```csharp
private void ResetTimeInvoiceStart()
```

##### `ResetTimePaymentEnd` <a name="ResetTimePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd"></a>

```csharp
private void ResetTimePaymentEnd()
```

##### `ResetTimePaymentStart` <a name="ResetTimePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart"></a>

```csharp
private void ResetTimePaymentStart()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection">InvoiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput">InvoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput">SearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput">StatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput">TimeInvoiceEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput">TimeInvoiceStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput">TimePaymentEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput">TimePaymentStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput">TypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId">InvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText">SearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status">Status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd">TimeInvoiceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart">TimeInvoiceStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd">TimePaymentEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart">TimePaymentStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type">Type</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter"></a>

```csharp
public DataOciOspGatewayInvoicesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a>

---

##### `InvoiceCollection`<sup>Required</sup> <a name="InvoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionList InvoiceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InvoiceIdInput`<sup>Optional</sup> <a name="InvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput"></a>

```csharp
public string InvoiceIdInput { get; }
```

- *Type:* string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput"></a>

```csharp
public string OspHomeRegionInput { get; }
```

- *Type:* string

---

##### `SearchTextInput`<sup>Optional</sup> <a name="SearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput"></a>

```csharp
public string SearchTextInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput"></a>

```csharp
public string[] StatusInput { get; }
```

- *Type:* string[]

---

##### `TimeInvoiceEndInput`<sup>Optional</sup> <a name="TimeInvoiceEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput"></a>

```csharp
public string TimeInvoiceEndInput { get; }
```

- *Type:* string

---

##### `TimeInvoiceStartInput`<sup>Optional</sup> <a name="TimeInvoiceStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput"></a>

```csharp
public string TimeInvoiceStartInput { get; }
```

- *Type:* string

---

##### `TimePaymentEndInput`<sup>Optional</sup> <a name="TimePaymentEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput"></a>

```csharp
public string TimePaymentEndInput { get; }
```

- *Type:* string

---

##### `TimePaymentStartInput`<sup>Optional</sup> <a name="TimePaymentStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput"></a>

```csharp
public string TimePaymentStartInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput"></a>

```csharp
public string[] TypeInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvoiceId`<sup>Required</sup> <a name="InvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId"></a>

```csharp
public string InvoiceId { get; }
```

- *Type:* string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; }
```

- *Type:* string

---

##### `SearchText`<sup>Required</sup> <a name="SearchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText"></a>

```csharp
public string SearchText { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status"></a>

```csharp
public string[] Status { get; }
```

- *Type:* string[]

---

##### `TimeInvoiceEnd`<sup>Required</sup> <a name="TimeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd"></a>

```csharp
public string TimeInvoiceEnd { get; }
```

- *Type:* string

---

##### `TimeInvoiceStart`<sup>Required</sup> <a name="TimeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart"></a>

```csharp
public string TimeInvoiceStart { get; }
```

- *Type:* string

---

##### `TimePaymentEnd`<sup>Required</sup> <a name="TimePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd"></a>

```csharp
public string TimePaymentEnd { get; }
```

- *Type:* string

---

##### `TimePaymentStart`<sup>Required</sup> <a name="TimePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart"></a>

```csharp
public string TimePaymentStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type"></a>

```csharp
public string[] Type { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesConfig <a name="DataOciOspGatewayInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string OspHomeRegion,
    object Filter = null,
    string Id = null,
    string InvoiceId = null,
    string SearchText = null,
    string[] Status = null,
    string TimeInvoiceEnd = null,
    string TimeInvoiceStart = null,
    string TimePaymentEnd = null,
    string TimePaymentStart = null,
    string[] Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId">InvoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText">SearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status">Status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd">TimeInvoiceEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart">TimeInvoiceStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd">TimePaymentEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart">TimePaymentStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type">Type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvoiceId`<sup>Optional</sup> <a name="InvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId"></a>

```csharp
public string InvoiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `SearchText`<sup>Optional</sup> <a name="SearchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText"></a>

```csharp
public string SearchText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status"></a>

```csharp
public string[] Status { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `TimeInvoiceEnd`<sup>Optional</sup> <a name="TimeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd"></a>

```csharp
public string TimeInvoiceEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `TimeInvoiceStart`<sup>Optional</sup> <a name="TimeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart"></a>

```csharp
public string TimeInvoiceStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `TimePaymentEnd`<sup>Optional</sup> <a name="TimePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd"></a>

```csharp
public string TimePaymentEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `TimePaymentStart`<sup>Optional</sup> <a name="TimePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart"></a>

```csharp
public string TimePaymentStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type"></a>

```csharp
public string[] Type { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

### DataOciOspGatewayInvoicesFilter <a name="DataOciOspGatewayInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}.

---

### DataOciOspGatewayInvoicesInvoiceCollection <a name="DataOciOspGatewayInvoicesInvoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollection {

};
```


### DataOciOspGatewayInvoicesInvoiceCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItems {

};
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress {

};
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry {

};
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency {

};
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesFilterList <a name="DataOciOspGatewayInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get"></a>

```csharp
private DataOciOspGatewayInvoicesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOspGatewayInvoicesFilterOutputReference <a name="DataOciOspGatewayInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode">Ascii3CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId">CountryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName">CountryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId">LanguageId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ascii3CountryCode`<sup>Required</sup> <a name="Ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```csharp
public string Ascii3CountryCode { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CountryId`<sup>Required</sup> <a name="CountryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId"></a>

```csharp
public double CountryId { get; }
```

- *Type:* double

---

##### `CountryName`<sup>Required</sup> <a name="CountryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName"></a>

```csharp
public string CountryName { get; }
```

- *Type:* string

---

##### `LanguageId`<sup>Required</sup> <a name="LanguageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId"></a>

```csharp
public double LanguageId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4">AddressLine4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country">Country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `AddressLine4`<sup>Required</sup> <a name="AddressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4"></a>

```csharp
public string AddressLine4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList Country { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a>

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">RoundDecimalPoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion">UsdConversion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```csharp
public string CurrencySymbol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoundDecimalPoint`<sup>Required</sup> <a name="RoundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```csharp
public double RoundDecimalPoint { get; }
```

- *Type:* double

---

##### `UsdConversion`<sup>Required</sup> <a name="UsdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```csharp
public double UsdConversion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber">AccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid">AmountPaid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType">CardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType">CreditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting">EcheckRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits">LastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy">PaidBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId">PaypalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference">PaypalReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber">RoutingNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn">TimePaidOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber"></a>

```csharp
public string AccountNumber { get; }
```

- *Type:* string

---

##### `AmountPaid`<sup>Required</sup> <a name="AmountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid"></a>

```csharp
public double AmountPaid { get; }
```

- *Type:* double

---

##### `CardType`<sup>Required</sup> <a name="CardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType"></a>

```csharp
public string CardType { get; }
```

- *Type:* string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType"></a>

```csharp
public string CreditCardType { get; }
```

- *Type:* string

---

##### `EcheckRouting`<sup>Required</sup> <a name="EcheckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting"></a>

```csharp
public string EcheckRouting { get; }
```

- *Type:* string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits"></a>

```csharp
public string LastDigits { get; }
```

- *Type:* string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard"></a>

```csharp
public string NameOnCard { get; }
```

- *Type:* string

---

##### `PaidBy`<sup>Required</sup> <a name="PaidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy"></a>

```csharp
public string PaidBy { get; }
```

- *Type:* string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; }
```

- *Type:* string

---

##### `PaypalId`<sup>Required</sup> <a name="PaypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId"></a>

```csharp
public string PaypalId { get; }
```

- *Type:* string

---

##### `PaypalReference`<sup>Required</sup> <a name="PaypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference"></a>

```csharp
public string PaypalReference { get; }
```

- *Type:* string

---

##### `RoutingNumber`<sup>Required</sup> <a name="RoutingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber"></a>

```csharp
public string RoutingNumber { get; }
```

- *Type:* string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration"></a>

```csharp
public string TimeExpiration { get; }
```

- *Type:* string

---

##### `TimePaidOn`<sup>Required</sup> <a name="TimePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn"></a>

```csharp
public string TimePaidOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount">InvoiceAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted">InvoiceAmountAdjusted</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied">InvoiceAmountApplied</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited">InvoiceAmountCredited</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue">InvoiceAmountDue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute">InvoiceAmountInDispute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId">InvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber">InvoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber">InvoicePoNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber">InvoiceRefNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus">InvoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType">InvoiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable">IsCreditCardPayable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf">IsDisplayDownloadPdf</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf">IsDisplayViewPdf</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid">IsPaid</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable">IsPayable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed">IsPaymentFailed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable">IsPdfEmailAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail">LastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName">PartyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms">PaymentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail">PreferredEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds">SubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax">Tax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice">TimeInvoice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue">TimeInvoiceDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList BillToAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a>

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a>

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId"></a>

```csharp
public string InternalInvoiceId { get; }
```

- *Type:* string

---

##### `InvoiceAmount`<sup>Required</sup> <a name="InvoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount"></a>

```csharp
public double InvoiceAmount { get; }
```

- *Type:* double

---

##### `InvoiceAmountAdjusted`<sup>Required</sup> <a name="InvoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted"></a>

```csharp
public double InvoiceAmountAdjusted { get; }
```

- *Type:* double

---

##### `InvoiceAmountApplied`<sup>Required</sup> <a name="InvoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied"></a>

```csharp
public double InvoiceAmountApplied { get; }
```

- *Type:* double

---

##### `InvoiceAmountCredited`<sup>Required</sup> <a name="InvoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited"></a>

```csharp
public double InvoiceAmountCredited { get; }
```

- *Type:* double

---

##### `InvoiceAmountDue`<sup>Required</sup> <a name="InvoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue"></a>

```csharp
public double InvoiceAmountDue { get; }
```

- *Type:* double

---

##### `InvoiceAmountInDispute`<sup>Required</sup> <a name="InvoiceAmountInDispute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute"></a>

```csharp
public double InvoiceAmountInDispute { get; }
```

- *Type:* double

---

##### `InvoiceId`<sup>Required</sup> <a name="InvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId"></a>

```csharp
public string InvoiceId { get; }
```

- *Type:* string

---

##### `InvoiceNumber`<sup>Required</sup> <a name="InvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber"></a>

```csharp
public string InvoiceNumber { get; }
```

- *Type:* string

---

##### `InvoicePoNumber`<sup>Required</sup> <a name="InvoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber"></a>

```csharp
public string InvoicePoNumber { get; }
```

- *Type:* string

---

##### `InvoiceRefNumber`<sup>Required</sup> <a name="InvoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber"></a>

```csharp
public string InvoiceRefNumber { get; }
```

- *Type:* string

---

##### `InvoiceStatus`<sup>Required</sup> <a name="InvoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus"></a>

```csharp
public string InvoiceStatus { get; }
```

- *Type:* string

---

##### `InvoiceType`<sup>Required</sup> <a name="InvoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType"></a>

```csharp
public string InvoiceType { get; }
```

- *Type:* string

---

##### `IsCreditCardPayable`<sup>Required</sup> <a name="IsCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable"></a>

```csharp
public IResolvable IsCreditCardPayable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDisplayDownloadPdf`<sup>Required</sup> <a name="IsDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf"></a>

```csharp
public IResolvable IsDisplayDownloadPdf { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDisplayViewPdf`<sup>Required</sup> <a name="IsDisplayViewPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf"></a>

```csharp
public IResolvable IsDisplayViewPdf { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPaid`<sup>Required</sup> <a name="IsPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid"></a>

```csharp
public IResolvable IsPaid { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPayable`<sup>Required</sup> <a name="IsPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable"></a>

```csharp
public IResolvable IsPayable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPaymentFailed`<sup>Required</sup> <a name="IsPaymentFailed" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed"></a>

```csharp
public IResolvable IsPaymentFailed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPdfEmailAvailable`<sup>Required</sup> <a name="IsPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable"></a>

```csharp
public IResolvable IsPdfEmailAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastPaymentDetail`<sup>Required</sup> <a name="LastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList LastPaymentDetail { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a>

---

##### `PartyName`<sup>Required</sup> <a name="PartyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName"></a>

```csharp
public string PartyName { get; }
```

- *Type:* string

---

##### `PaymentTerms`<sup>Required</sup> <a name="PaymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms"></a>

```csharp
public string PaymentTerms { get; }
```

- *Type:* string

---

##### `PreferredEmail`<sup>Required</sup> <a name="PreferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail"></a>

```csharp
public string PreferredEmail { get; }
```

- *Type:* string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds"></a>

```csharp
public string[] SubscriptionIds { get; }
```

- *Type:* string[]

---

##### `Tax`<sup>Required</sup> <a name="Tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax"></a>

```csharp
public double Tax { get; }
```

- *Type:* double

---

##### `TimeInvoice`<sup>Required</sup> <a name="TimeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice"></a>

```csharp
public string TimeInvoice { get; }
```

- *Type:* string

---

##### `TimeInvoiceDue`<sup>Required</sup> <a name="TimeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue"></a>

```csharp
public string TimeInvoiceDue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionList <a name="DataOciOspGatewayInvoicesInvoiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get"></a>

```csharp
private DataOciOspGatewayInvoicesInvoiceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoicesInvoiceCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoicesInvoiceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoicesInvoiceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a>

---



