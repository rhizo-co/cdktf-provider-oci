# `dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule <a name="`dataOciOsManagementHubManagedInstanceAvailableSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSources <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources oci_os_management_hub_managed_instance_available_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSources(Construct Scope, string Id, DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceAvailableSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceAvailableSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection">AvailableSoftwareSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput">DisplayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName">DisplayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailableSoftwareSourceCollection`<sup>Required</sup> <a name="AvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.availableSoftwareSourceCollection"></a>

```csharp
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList AvailableSoftwareSourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filter"></a>

```csharp
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameInput"></a>

```csharp
public string[] DisplayNameInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayName"></a>

```csharp
public string[] DisplayName { get; }
```

- *Type:* string[]

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection {

};
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems {

};
```


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string CompartmentId = null,
    string[] DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName">DisplayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#managed_instance_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayName"></a>

```csharp
public string[] DisplayName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#filter DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#id DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#name DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#values DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_available_software_sources#regex DataOciOsManagementHubManagedInstanceAvailableSoftwareSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a>

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



