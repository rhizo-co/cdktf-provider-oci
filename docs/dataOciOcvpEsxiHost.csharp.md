# `dataOciOcvpEsxiHost` Submodule <a name="`dataOciOcvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHost <a name="DataOciOcvpEsxiHost" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHost(Construct Scope, string Id, DataOciOcvpEsxiHostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig">DataOciOcvpEsxiHostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig">DataOciOcvpEsxiHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHost.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpEsxiHost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpEsxiHost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingContractEndDate">BillingContractEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeInstanceId">ComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentCommitment">CurrentCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentSku">CurrentSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.gracePeriodEndDate">GracePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostOcpuCount">HostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingContinuationInProgress">IsBillingContinuationInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingSwappingInProgress">IsBillingSwappingInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextCommitment">NextCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextSku">NextSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.replacementEsxiHostId">ReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.swapBillingHostId">SwapBillingHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.upgradedReplacementEsxiHostId">UpgradedReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostIdInput">EsxiHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostId">EsxiHostId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BillingContractEndDate`<sup>Required</sup> <a name="BillingContractEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingContractEndDate"></a>

```csharp
public string BillingContractEndDate { get; }
```

- *Type:* string

---

##### `BillingDonorHostId`<sup>Required</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.billingDonorHostId"></a>

```csharp
public string BillingDonorHostId { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.computeInstanceId"></a>

```csharp
public string ComputeInstanceId { get; }
```

- *Type:* string

---

##### `CurrentCommitment`<sup>Required</sup> <a name="CurrentCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentCommitment"></a>

```csharp
public string CurrentCommitment { get; }
```

- *Type:* string

---

##### `CurrentSku`<sup>Required</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.currentSku"></a>

```csharp
public string CurrentSku { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FailedEsxiHostId`<sup>Required</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.failedEsxiHostId"></a>

```csharp
public string FailedEsxiHostId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GracePeriodEndDate`<sup>Required</sup> <a name="GracePeriodEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.gracePeriodEndDate"></a>

```csharp
public string GracePeriodEndDate { get; }
```

- *Type:* string

---

##### `HostOcpuCount`<sup>Required</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostOcpuCount"></a>

```csharp
public double HostOcpuCount { get; }
```

- *Type:* double

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBillingContinuationInProgress`<sup>Required</sup> <a name="IsBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```csharp
public IResolvable IsBillingContinuationInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBillingSwappingInProgress`<sup>Required</sup> <a name="IsBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```csharp
public IResolvable IsBillingSwappingInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NextCommitment`<sup>Required</sup> <a name="NextCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextCommitment"></a>

```csharp
public string NextCommitment { get; }
```

- *Type:* string

---

##### `NextSku`<sup>Required</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nextSku"></a>

```csharp
public string NextSku { get; }
```

- *Type:* string

---

##### `NonUpgradedEsxiHostId`<sup>Required</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```csharp
public string NonUpgradedEsxiHostId { get; }
```

- *Type:* string

---

##### `ReplacementEsxiHostId`<sup>Required</sup> <a name="ReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.replacementEsxiHostId"></a>

```csharp
public string ReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SwapBillingHostId`<sup>Required</sup> <a name="SwapBillingHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.swapBillingHostId"></a>

```csharp
public string SwapBillingHostId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradedReplacementEsxiHostId`<sup>Required</sup> <a name="UpgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```csharp
public string UpgradedReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `EsxiHostIdInput`<sup>Optional</sup> <a name="EsxiHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostIdInput"></a>

```csharp
public string EsxiHostIdInput { get; }
```

- *Type:* string

---

##### `EsxiHostId`<sup>Required</sup> <a name="EsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.esxiHostId"></a>

```csharp
public string EsxiHostId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostConfig <a name="DataOciOcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpEsxiHostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EsxiHostId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.esxiHostId">EsxiHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#esxi_host_id DataOciOcvpEsxiHost#esxi_host_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EsxiHostId`<sup>Required</sup> <a name="EsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHost.DataOciOcvpEsxiHostConfig.property.esxiHostId"></a>

```csharp
public string EsxiHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_host#esxi_host_id DataOciOcvpEsxiHost#esxi_host_id}.

---



