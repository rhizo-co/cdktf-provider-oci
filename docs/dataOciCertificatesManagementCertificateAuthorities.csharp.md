# `dataOciCertificatesManagementCertificateAuthorities` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorities <a name="DataOciCertificatesManagementCertificateAuthorities" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities oci_certificates_management_certificate_authorities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorities(Construct Scope, string Id, DataOciCertificatesManagementCertificateAuthoritiesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig">DataOciCertificatesManagementCertificateAuthoritiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig">DataOciCertificatesManagementCertificateAuthoritiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId">ResetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId">ResetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCertificateAuthorityId` <a name="ResetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId"></a>

```csharp
private void ResetCertificateAuthorityId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerCertificateAuthorityId` <a name="ResetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId"></a>

```csharp
private void ResetIssuerCertificateAuthorityId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthorities.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthorities.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthorities.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthorities.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorities to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateAuthorities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection">CertificateAuthorityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput">IssuerCertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CertificateAuthorityCollection`<sup>Required</sup> <a name="CertificateAuthorityCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList CertificateAuthorityCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a>

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput"></a>

```csharp
public string CertificateAuthorityIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="IssuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput"></a>

```csharp
public string IssuerCertificateAuthorityIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject {

};
```


### DataOciCertificatesManagementCertificateAuthoritiesConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateAuthorityId = null,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    string IssuerCertificateAuthorityId = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthorityId`<sup>Optional</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#filter DataOciCertificatesManagementCertificateAuthorities#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerCertificateAuthorityId`<sup>Optional</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}.

---

### DataOciCertificatesManagementCertificateAuthoritiesFilter <a name="DataOciCertificatesManagementCertificateAuthoritiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">CertificateAuthorityMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">LeafCertificateMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityMaxValidityDuration`<sup>Required</sup> <a name="CertificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```csharp
public string CertificateAuthorityMaxValidityDuration { get; }
```

- *Type:* string

---

##### `LeafCertificateMaxValidityDuration`<sup>Required</sup> <a name="LeafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```csharp
public string LeafCertificateMaxValidityDuration { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```csharp
public string ObjectStorageBucketName { get; }
```

- *Type:* string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```csharp
public string ObjectStorageNamespace { get; }
```

- *Type:* string

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```csharp
public string ObjectStorageObjectNameFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomFormattedUrls`<sup>Required</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```csharp
public string[] CustomFormattedUrls { get; }
```

- *Type:* string[]

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList ObjectStorageConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; }
```

- *Type:* string

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```csharp
public string IssuerCaVersionNumber { get; }
```

- *Type:* string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList RevocationStatus { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```csharp
public string RevocationReason { get; }
```

- *Type:* string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```csharp
public string TimeOfRevocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules">CertificateAuthorityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion">CurrentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList CertificateAuthorityConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a>

---

##### `CertificateAuthorityRules`<sup>Required</sup> <a name="CertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList CertificateAuthorityRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a>

---

##### `CertificateRevocationListDetails`<sup>Required</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList CertificateRevocationListDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList CurrentVersion { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterList <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



