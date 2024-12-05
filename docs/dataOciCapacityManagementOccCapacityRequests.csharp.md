# `dataOciCapacityManagementOccCapacityRequests` Submodule <a name="`dataOciCapacityManagementOccCapacityRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequests <a name="DataOciCapacityManagementOccCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests oci_capacity_management_occ_capacity_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequests(Construct Scope, string Id, DataOciCapacityManagementOccCapacityRequestsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId">ResetOccAvailabilityCatalogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType">ResetRequestType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOccAvailabilityCatalogId` <a name="ResetOccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId"></a>

```csharp
private void ResetOccAvailabilityCatalogId()
```

##### `ResetRequestType` <a name="ResetRequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType"></a>

```csharp
private void ResetRequestType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequests.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequests.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequests.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequests.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequests to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccCapacityRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection">OccCapacityRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput">OccAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput">RequestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a>

---

##### `OccCapacityRequestCollection`<sup>Required</sup> <a name="OccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList OccCapacityRequestCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="OccAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput"></a>

```csharp
public string OccAvailabilityCatalogIdInput { get; }
```

- *Type:* string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput"></a>

```csharp
public string RequestTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; }
```

- *Type:* string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestsConfig <a name="DataOciCapacityManagementOccCapacityRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string Namespace = null,
    string OccAvailabilityCatalogId = null,
    string RequestType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType">RequestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#filter DataOciCapacityManagementOccCapacityRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}.

---

##### `OccAvailabilityCatalogId`<sup>Optional</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}.

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType"></a>

```csharp
public string RequestType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}.

---

### DataOciCapacityManagementOccCapacityRequestsFilter <a name="DataOciCapacityManagementOccCapacityRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}.

---

### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection {

};
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems {

};
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails {

};
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct {

};
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestsFilterList <a name="DataOciCapacityManagementOccCapacityRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccCapacityRequestsFilterOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```csharp
public string HandoverQuantity { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover">DateActualHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity">DemandQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualHandoverQuantity`<sup>Required</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity"></a>

```csharp
public string ActualHandoverQuantity { get; }
```

- *Type:* string

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList AssociatedOccHandoverResourceBlockList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DateActualHandover`<sup>Required</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover"></a>

```csharp
public string DateActualHandover { get; }
```

- *Type:* string

---

##### `DateExpectedHandover`<sup>Required</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover"></a>

```csharp
public string DateExpectedHandover { get; }
```

- *Type:* string

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity"></a>

```csharp
public string DemandQuantity { get; }
```

- *Type:* string

---

##### `ExpectedHandoverQuantity`<sup>Required</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity"></a>

```csharp
public string ExpectedHandoverQuantity { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SourceWorkloadType`<sup>Required</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType"></a>

```csharp
public string SourceWorkloadType { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState">RequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestState`<sup>Required</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState"></a>

```csharp
public string RequestState { get; }
```

- *Type:* string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value">Value</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value"></a>

```csharp
public StringMap Value { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a>

---



