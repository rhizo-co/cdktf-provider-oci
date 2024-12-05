# `dataOciOspGatewayInvoice` Submodule <a name="`dataOciOspGatewayInvoice` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoice <a name="DataOciOspGatewayInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice oci_osp_gateway_invoice}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoice(Construct Scope, string Id, DataOciOspGatewayInvoiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig">DataOciOspGatewayInvoiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig">DataOciOspGatewayInvoiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoice.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoice.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoice.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOspGatewayInvoice.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayInvoice to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayInvoice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount">InvoiceAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted">InvoiceAmountAdjusted</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied">InvoiceAmountApplied</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited">InvoiceAmountCredited</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue">InvoiceAmountDue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId">InvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber">InvoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber">InvoicePoNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber">InvoiceRefNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus">InvoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType">InvoiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable">IsCreditCardPayable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf">IsDisplayDownloadPdf</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable">IsPayable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable">IsPdfEmailAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail">LastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms">PaymentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail">PreferredEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds">SubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax">Tax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice">TimeInvoice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue">TimeInvoiceDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput">InternalInvoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress"></a>

```csharp
public DataOciOspGatewayInvoiceBillToAddressList BillToAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a>

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency"></a>

```csharp
public DataOciOspGatewayInvoiceCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a>

---

##### `InvoiceAmount`<sup>Required</sup> <a name="InvoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount"></a>

```csharp
public double InvoiceAmount { get; }
```

- *Type:* double

---

##### `InvoiceAmountAdjusted`<sup>Required</sup> <a name="InvoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted"></a>

```csharp
public double InvoiceAmountAdjusted { get; }
```

- *Type:* double

---

##### `InvoiceAmountApplied`<sup>Required</sup> <a name="InvoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied"></a>

```csharp
public double InvoiceAmountApplied { get; }
```

- *Type:* double

---

##### `InvoiceAmountCredited`<sup>Required</sup> <a name="InvoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited"></a>

```csharp
public double InvoiceAmountCredited { get; }
```

- *Type:* double

---

##### `InvoiceAmountDue`<sup>Required</sup> <a name="InvoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue"></a>

```csharp
public double InvoiceAmountDue { get; }
```

- *Type:* double

---

##### `InvoiceId`<sup>Required</sup> <a name="InvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId"></a>

```csharp
public string InvoiceId { get; }
```

- *Type:* string

---

##### `InvoiceNumber`<sup>Required</sup> <a name="InvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber"></a>

```csharp
public string InvoiceNumber { get; }
```

- *Type:* string

---

##### `InvoicePoNumber`<sup>Required</sup> <a name="InvoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber"></a>

```csharp
public string InvoicePoNumber { get; }
```

- *Type:* string

---

##### `InvoiceRefNumber`<sup>Required</sup> <a name="InvoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber"></a>

```csharp
public string InvoiceRefNumber { get; }
```

- *Type:* string

---

##### `InvoiceStatus`<sup>Required</sup> <a name="InvoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus"></a>

```csharp
public string InvoiceStatus { get; }
```

- *Type:* string

---

##### `InvoiceType`<sup>Required</sup> <a name="InvoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType"></a>

```csharp
public string InvoiceType { get; }
```

- *Type:* string

---

##### `IsCreditCardPayable`<sup>Required</sup> <a name="IsCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable"></a>

```csharp
public IResolvable IsCreditCardPayable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDisplayDownloadPdf`<sup>Required</sup> <a name="IsDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf"></a>

```csharp
public IResolvable IsDisplayDownloadPdf { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPayable`<sup>Required</sup> <a name="IsPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable"></a>

```csharp
public IResolvable IsPayable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPdfEmailAvailable`<sup>Required</sup> <a name="IsPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable"></a>

```csharp
public IResolvable IsPdfEmailAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastPaymentDetail`<sup>Required</sup> <a name="LastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail"></a>

```csharp
public DataOciOspGatewayInvoiceLastPaymentDetailList LastPaymentDetail { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a>

---

##### `PaymentTerms`<sup>Required</sup> <a name="PaymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms"></a>

```csharp
public string PaymentTerms { get; }
```

- *Type:* string

---

##### `PreferredEmail`<sup>Required</sup> <a name="PreferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail"></a>

```csharp
public string PreferredEmail { get; }
```

- *Type:* string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds"></a>

```csharp
public string[] SubscriptionIds { get; }
```

- *Type:* string[]

---

##### `Tax`<sup>Required</sup> <a name="Tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax"></a>

```csharp
public double Tax { get; }
```

- *Type:* double

---

##### `TimeInvoice`<sup>Required</sup> <a name="TimeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice"></a>

```csharp
public string TimeInvoice { get; }
```

- *Type:* string

---

##### `TimeInvoiceDue`<sup>Required</sup> <a name="TimeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue"></a>

```csharp
public string TimeInvoiceDue { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalInvoiceIdInput`<sup>Optional</sup> <a name="InternalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput"></a>

```csharp
public string InternalInvoiceIdInput { get; }
```

- *Type:* string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput"></a>

```csharp
public string OspHomeRegionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId"></a>

```csharp
public string InternalInvoiceId { get; }
```

- *Type:* string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoiceBillToAddress <a name="DataOciOspGatewayInvoiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddress {

};
```


### DataOciOspGatewayInvoiceBillToAddressCountry <a name="DataOciOspGatewayInvoiceBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddressCountry {

};
```


### DataOciOspGatewayInvoiceConfig <a name="DataOciOspGatewayInvoiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId">InternalInvoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}.

---

##### `InternalInvoiceId`<sup>Required</sup> <a name="InternalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId"></a>

```csharp
public string InternalInvoiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoiceCurrency <a name="DataOciOspGatewayInvoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceCurrency {

};
```


### DataOciOspGatewayInvoiceLastPaymentDetail <a name="DataOciOspGatewayInvoiceLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceLastPaymentDetail {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoiceBillToAddressCountryList <a name="DataOciOspGatewayInvoiceBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddressCountryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get"></a>

```csharp
private DataOciOspGatewayInvoiceBillToAddressCountryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoiceBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddressCountryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode">Ascii3CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId">CountryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName">CountryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId">LanguageId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ascii3CountryCode`<sup>Required</sup> <a name="Ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```csharp
public string Ascii3CountryCode { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CountryId`<sup>Required</sup> <a name="CountryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId"></a>

```csharp
public double CountryId { get; }
```

- *Type:* double

---

##### `CountryName`<sup>Required</sup> <a name="CountryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName"></a>

```csharp
public string CountryName { get; }
```

- *Type:* string

---

##### `LanguageId`<sup>Required</sup> <a name="LanguageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId"></a>

```csharp
public double LanguageId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoiceBillToAddressCountry InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a>

---


### DataOciOspGatewayInvoiceBillToAddressList <a name="DataOciOspGatewayInvoiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get"></a>

```csharp
private DataOciOspGatewayInvoiceBillToAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoiceBillToAddressOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceBillToAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4">AddressLine4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country">Country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `AddressLine4`<sup>Required</sup> <a name="AddressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4"></a>

```csharp
public string AddressLine4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country"></a>

```csharp
public DataOciOspGatewayInvoiceBillToAddressCountryList Country { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a>

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoiceBillToAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a>

---


### DataOciOspGatewayInvoiceCurrencyList <a name="DataOciOspGatewayInvoiceCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get"></a>

```csharp
private DataOciOspGatewayInvoiceCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoiceCurrencyOutputReference <a name="DataOciOspGatewayInvoiceCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint">RoundDecimalPoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion">UsdConversion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol"></a>

```csharp
public string CurrencySymbol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoundDecimalPoint`<sup>Required</sup> <a name="RoundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint"></a>

```csharp
public double RoundDecimalPoint { get; }
```

- *Type:* double

---

##### `UsdConversion`<sup>Required</sup> <a name="UsdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion"></a>

```csharp
public double UsdConversion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoiceCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a>

---


### DataOciOspGatewayInvoiceLastPaymentDetailList <a name="DataOciOspGatewayInvoiceLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceLastPaymentDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get"></a>

```csharp
private DataOciOspGatewayInvoiceLastPaymentDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOspGatewayInvoiceLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoiceLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOspGatewayInvoiceLastPaymentDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber">AccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid">AmountPaid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType">CardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType">CreditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting">EcheckRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits">LastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy">PaidBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId">PaypalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference">PaypalReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber">RoutingNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn">TimePaidOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber"></a>

```csharp
public string AccountNumber { get; }
```

- *Type:* string

---

##### `AmountPaid`<sup>Required</sup> <a name="AmountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid"></a>

```csharp
public double AmountPaid { get; }
```

- *Type:* double

---

##### `CardType`<sup>Required</sup> <a name="CardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType"></a>

```csharp
public string CardType { get; }
```

- *Type:* string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType"></a>

```csharp
public string CreditCardType { get; }
```

- *Type:* string

---

##### `EcheckRouting`<sup>Required</sup> <a name="EcheckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting"></a>

```csharp
public string EcheckRouting { get; }
```

- *Type:* string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits"></a>

```csharp
public string LastDigits { get; }
```

- *Type:* string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard"></a>

```csharp
public string NameOnCard { get; }
```

- *Type:* string

---

##### `PaidBy`<sup>Required</sup> <a name="PaidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy"></a>

```csharp
public string PaidBy { get; }
```

- *Type:* string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; }
```

- *Type:* string

---

##### `PaypalId`<sup>Required</sup> <a name="PaypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId"></a>

```csharp
public string PaypalId { get; }
```

- *Type:* string

---

##### `PaypalReference`<sup>Required</sup> <a name="PaypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference"></a>

```csharp
public string PaypalReference { get; }
```

- *Type:* string

---

##### `RoutingNumber`<sup>Required</sup> <a name="RoutingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber"></a>

```csharp
public string RoutingNumber { get; }
```

- *Type:* string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration"></a>

```csharp
public string TimeExpiration { get; }
```

- *Type:* string

---

##### `TimePaidOn`<sup>Required</sup> <a name="TimePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn"></a>

```csharp
public string TimePaidOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue"></a>

```csharp
public DataOciOspGatewayInvoiceLastPaymentDetail InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a>

---



