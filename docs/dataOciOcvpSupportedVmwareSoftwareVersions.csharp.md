# `dataOciOcvpSupportedVmwareSoftwareVersions` Submodule <a name="`dataOciOcvpSupportedVmwareSoftwareVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions oci_ocvp_supported_vmware_software_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersions(Construct Scope, string Id, DataOciOcvpSupportedVmwareSoftwareVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName">ResetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade">ResetVersionToUpgrade</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetHostShapeName` <a name="ResetHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName"></a>

```csharp
private void ResetHostShapeName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVersionToUpgrade` <a name="ResetVersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade"></a>

```csharp
private void ResetVersionToUpgrade()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSupportedVmwareSoftwareVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSupportedVmwareSoftwareVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSupportedVmwareSoftwareVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSupportedVmwareSoftwareVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpSupportedVmwareSoftwareVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpSupportedVmwareSoftwareVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedVmwareSoftwareVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput">HostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput">VersionToUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade">VersionToUpgrade</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter"></a>

```csharp
public DataOciOcvpSupportedVmwareSoftwareVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items"></a>

```csharp
public DataOciOcvpSupportedVmwareSoftwareVersionsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `HostShapeNameInput`<sup>Optional</sup> <a name="HostShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput"></a>

```csharp
public string HostShapeNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VersionToUpgradeInput`<sup>Optional</sup> <a name="VersionToUpgradeInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput"></a>

```csharp
public string VersionToUpgradeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionToUpgrade`<sup>Required</sup> <a name="VersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade"></a>

```csharp
public string VersionToUpgrade { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsConfig <a name="DataOciOcvpSupportedVmwareSoftwareVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string HostShapeName = null,
    string Id = null,
    string Version = null,
    string VersionToUpgrade = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade">VersionToUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#filter DataOciOcvpSupportedVmwareSoftwareVersions#filter}

---

##### `HostShapeName`<sup>Optional</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}.

---

##### `VersionToUpgrade`<sup>Optional</sup> <a name="VersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade"></a>

```csharp
public string VersionToUpgrade { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsFilter <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsItems <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItems {

};
```


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsFilterList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get"></a>

```csharp
private DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get"></a>

```csharp
private DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames">SupportedHostShapeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SupportedHostShapeNames`<sup>Required</sup> <a name="SupportedHostShapeNames" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames"></a>

```csharp
public string[] SupportedHostShapeNames { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a>

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get"></a>

```csharp
private DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions">EsxiSoftwareVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EsxiSoftwareVersions`<sup>Required</sup> <a name="EsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions"></a>

```csharp
public DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList EsxiSoftwareVersions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSupportedVmwareSoftwareVersionsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a>

---



