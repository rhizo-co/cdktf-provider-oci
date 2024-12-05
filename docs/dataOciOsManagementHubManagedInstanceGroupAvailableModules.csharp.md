# `dataOciOsManagementHubManagedInstanceGroupAvailableModules` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupAvailableModules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModules <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModules" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules oci_os_management_hub_managed_instance_group_available_modules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModules(Construct Scope, string Id, DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableModules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupAvailableModules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupAvailableModules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupAvailableModules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupAvailableModules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableModules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupAvailableModules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceGroupAvailableModules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupAvailableModules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupAvailableModuleCollection">ManagedInstanceGroupAvailableModuleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filter"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList</a>

---

##### `ManagedInstanceGroupAvailableModuleCollection`<sup>Required</sup> <a name="ManagedInstanceGroupAvailableModuleCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupAvailableModuleCollection"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList ManagedInstanceGroupAvailableModuleCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string Name = null,
    string NameContains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#id DataOciOsManagementHubManagedInstanceGroupAvailableModules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name_contains DataOciOsManagementHubManagedInstanceGroupAvailableModules#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#managed_instance_group_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#filter DataOciOsManagementHubManagedInstanceGroupAvailableModules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#id DataOciOsManagementHubManagedInstanceGroupAvailableModules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name_contains DataOciOsManagementHubManagedInstanceGroupAvailableModules#name_contains}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#values DataOciOsManagementHubManagedInstanceGroupAvailableModules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#regex DataOciOsManagementHubManagedInstanceGroupAvailableModules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#values DataOciOsManagementHubManagedInstanceGroupAvailableModules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#regex DataOciOsManagementHubManagedInstanceGroupAvailableModules#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection {

};
```


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection</a>

---



