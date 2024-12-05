# `dataOciCertificatesManagementCertificateVersion` Submodule <a name="`dataOciCertificatesManagementCertificateVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateVersion <a name="DataOciCertificatesManagementCertificateVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version oci_certificates_management_certificate_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersion(Construct Scope, string Id, DataOciCertificatesManagementCertificateVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig">DataOciCertificatesManagementCertificateVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig">DataOciCertificatesManagementCertificateVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList">DataOciCertificatesManagementCertificateVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList">DataOciCertificatesManagementCertificateVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateVersionNumberInput">CertificateVersionNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateVersionNumber">CertificateVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.issuerCaVersionNumber"></a>

```csharp
public string IssuerCaVersionNumber { get; }
```

- *Type:* string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.revocationStatus"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionRevocationStatusList RevocationStatus { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList">DataOciCertificatesManagementCertificateVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.subjectAlternativeNames"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList SubjectAlternativeNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.validity"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList">DataOciCertificatesManagementCertificateVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `CertificateVersionNumberInput`<sup>Optional</sup> <a name="CertificateVersionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateVersionNumberInput"></a>

```csharp
public string CertificateVersionNumberInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CertificateVersionNumber`<sup>Required</sup> <a name="CertificateVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.certificateVersionNumber"></a>

```csharp
public string CertificateVersionNumber { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateVersionConfig <a name="DataOciCertificatesManagementCertificateVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateId,
    string CertificateVersionNumber,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#certificate_id DataOciCertificatesManagementCertificateVersion#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.certificateVersionNumber">CertificateVersionNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#certificate_version_number DataOciCertificatesManagementCertificateVersion#certificate_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#id DataOciCertificatesManagementCertificateVersion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#certificate_id DataOciCertificatesManagementCertificateVersion#certificate_id}.

---

##### `CertificateVersionNumber`<sup>Required</sup> <a name="CertificateVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.certificateVersionNumber"></a>

```csharp
public string CertificateVersionNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#certificate_version_number DataOciCertificatesManagementCertificateVersion#certificate_version_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_version#id DataOciCertificatesManagementCertificateVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCertificatesManagementCertificateVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionRevocationStatus {

};
```


### DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames {

};
```


### DataOciCertificatesManagementCertificateVersionValidity <a name="DataOciCertificatesManagementCertificateVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionValidity {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionRevocationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatus">DataOciCertificatesManagementCertificateVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.revocationReason"></a>

```csharp
public string RevocationReason { get; }
```

- *Type:* string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```csharp
public string TimeOfRevocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatusOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionRevocationStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionRevocationStatus">DataOciCertificatesManagementCertificateVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateVersionValidityList <a name="DataOciCertificatesManagementCertificateVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateVersionValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateVersionValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidity">DataOciCertificatesManagementCertificateVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidityOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateVersionValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersion.DataOciCertificatesManagementCertificateVersionValidity">DataOciCertificatesManagementCertificateVersionValidity</a>

---



