# `dataOciCertificatesManagementCaBundles` Submodule <a name="`dataOciCertificatesManagementCaBundles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCaBundles <a name="DataOciCertificatesManagementCaBundles" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles oci_certificates_management_ca_bundles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundles(Construct Scope, string Id, DataOciCertificatesManagementCaBundlesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig">DataOciCertificatesManagementCaBundlesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig">DataOciCertificatesManagementCaBundlesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCaBundleId"></a>

```csharp
private void ResetCaBundleId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCaBundles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCaBundles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCaBundles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCaBundles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCaBundles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCertificatesManagementCaBundles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCaBundles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCaBundles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCaBundles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleCollection">CaBundleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList">DataOciCertificatesManagementCaBundlesCaBundleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList">DataOciCertificatesManagementCaBundlesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleId">CaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CaBundleCollection`<sup>Required</sup> <a name="CaBundleCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleCollection"></a>

```csharp
public DataOciCertificatesManagementCaBundlesCaBundleCollectionList CaBundleCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList">DataOciCertificatesManagementCaBundlesCaBundleCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filter"></a>

```csharp
public DataOciCertificatesManagementCaBundlesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList">DataOciCertificatesManagementCaBundlesFilterList</a>

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleIdInput"></a>

```csharp
public string CaBundleIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.caBundleId"></a>

```csharp
public string CaBundleId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCaBundlesCaBundleCollection <a name="DataOciCertificatesManagementCaBundlesCaBundleCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollection {

};
```


### DataOciCertificatesManagementCaBundlesCaBundleCollectionItems <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollectionItems {

};
```


### DataOciCertificatesManagementCaBundlesConfig <a name="DataOciCertificatesManagementCaBundlesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CaBundleId = null,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.caBundleId">CaBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.caBundleId"></a>

```csharp
public string CaBundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#ca_bundle_id DataOciCertificatesManagementCaBundles#ca_bundle_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#compartment_id DataOciCertificatesManagementCaBundles#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#filter DataOciCertificatesManagementCaBundles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#id DataOciCertificatesManagementCaBundles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#state DataOciCertificatesManagementCaBundles#state}.

---

### DataOciCertificatesManagementCaBundlesFilter <a name="DataOciCertificatesManagementCaBundlesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#values DataOciCertificatesManagementCaBundles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#regex DataOciCertificatesManagementCaBundles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#name DataOciCertificatesManagementCaBundles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#values DataOciCertificatesManagementCaBundles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_ca_bundles#regex DataOciCertificatesManagementCaBundles#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get"></a>

```csharp
private DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.caBundlePem">CaBundlePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems">DataOciCertificatesManagementCaBundlesCaBundleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaBundlePem`<sup>Required</sup> <a name="CaBundlePem" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.caBundlePem"></a>

```csharp
public string CaBundlePem { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCaBundlesCaBundleCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItems">DataOciCertificatesManagementCaBundlesCaBundleCollectionItems</a>

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionList <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get"></a>

```csharp
private DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference <a name="DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList">DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection">DataOciCertificatesManagementCaBundlesCaBundleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.items"></a>

```csharp
public DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList">DataOciCertificatesManagementCaBundlesCaBundleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCaBundlesCaBundleCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesCaBundleCollection">DataOciCertificatesManagementCaBundlesCaBundleCollection</a>

---


### DataOciCertificatesManagementCaBundlesFilterList <a name="DataOciCertificatesManagementCaBundlesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get"></a>

```csharp
private DataOciCertificatesManagementCaBundlesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCertificatesManagementCaBundlesFilterOutputReference <a name="DataOciCertificatesManagementCaBundlesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCaBundlesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCaBundles.DataOciCertificatesManagementCaBundlesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



