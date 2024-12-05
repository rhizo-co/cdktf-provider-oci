# `dataOciOsManagementHubManagedInstanceErrata` Submodule <a name="`dataOciOsManagementHubManagedInstanceErrata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceErrata <a name="DataOciOsManagementHubManagedInstanceErrata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata oci_os_management_hub_managed_instance_errata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrata(Construct Scope, string Id, DataOciOsManagementHubManagedInstanceErrataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType">ResetClassificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetClassificationType` <a name="ResetClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType"></a>

```csharp
private void ResetClassificationType()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceErrata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceErrata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceErrata.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceErrata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceErrata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceErrata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceErrata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection">ManagedInstanceErratumSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput">ClassificationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType">ClassificationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a>

---

##### `ManagedInstanceErratumSummaryCollection`<sup>Required</sup> <a name="ManagedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList ManagedInstanceErratumSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a>

---

##### `ClassificationTypeInput`<sup>Optional</sup> <a name="ClassificationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput"></a>

```csharp
public string[] ClassificationTypeInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType"></a>

```csharp
public string[] ClassificationType { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceErrataConfig <a name="DataOciOsManagementHubManagedInstanceErrataConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string[] ClassificationType = null,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string[] Name = null,
    string NameContains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType">ClassificationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}.

---

##### `ClassificationType`<sup>Optional</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType"></a>

```csharp
public string[] ClassificationType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#filter DataOciOsManagementHubManagedInstanceErrata#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}.

---

### DataOciOsManagementHubManagedInstanceErrataFilter <a name="DataOciOsManagementHubManagedInstanceErrataFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}.

---

### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection {

};
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems {

};
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceErrataFilterList <a name="DataOciOsManagementHubManagedInstanceErrataFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceErrataFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceErrataFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType">AdvisoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages">Packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves">RelatedCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis">Synopsis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued">TimeIssued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvisoryType`<sup>Required</sup> <a name="AdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType"></a>

```csharp
public string AdvisoryType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList Packages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a>

---

##### `RelatedCves`<sup>Required</sup> <a name="RelatedCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves"></a>

```csharp
public string[] RelatedCves { get; }
```

- *Type:* string[]

---

##### `Synopsis`<sup>Required</sup> <a name="Synopsis" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis"></a>

```csharp
public string Synopsis { get; }
```

- *Type:* string

---

##### `TimeIssued`<sup>Required</sup> <a name="TimeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued"></a>

```csharp
public string TimeIssued { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a>

---



