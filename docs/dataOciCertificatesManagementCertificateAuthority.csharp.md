# `dataOciCertificatesManagementCertificateAuthority` Submodule <a name="`dataOciCertificatesManagementCertificateAuthority` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthority <a name="DataOciCertificatesManagementCertificateAuthority" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority oci_certificates_management_certificate_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthority(Construct Scope, string Id, DataOciCertificatesManagementCertificateAuthorityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthority.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthority.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthority.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCertificatesManagementCertificateAuthority.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthority to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityRules">CertificateAuthorityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.currentVersion">CurrentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList">DataOciCertificatesManagementCertificateAuthoritySubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityConfig"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList CertificateAuthorityConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList</a>

---

##### `CertificateAuthorityRules`<sup>Required</sup> <a name="CertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityRules"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList CertificateAuthorityRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a>

---

##### `CertificateRevocationListDetails`<sup>Required</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateRevocationListDetails"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList CertificateRevocationListDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.currentVersion"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersionList CurrentVersion { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.subject"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritySubjectList Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList">DataOciCertificatesManagementCertificateAuthoritySubjectList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityIdInput"></a>

```csharp
public string CertificateAuthorityIdInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig {

};
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject {

};
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity {

};
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules {

};
```


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails {

};
```


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig {

};
```


### DataOciCertificatesManagementCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateAuthorityId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#certificate_authority_id DataOciCertificatesManagementCertificateAuthority#certificate_authority_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#certificate_authority_id DataOciCertificatesManagementCertificateAuthority#certificate_authority_id}.

---

### DataOciCertificatesManagementCertificateAuthorityCurrentVersion <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersion {

};
```


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus {

};
```


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity {

};
```


### DataOciCertificatesManagementCertificateAuthoritySubject <a name="DataOciCertificatesManagementCertificateAuthoritySubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritySubject {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">CertificateAuthorityMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">LeafCertificateMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityMaxValidityDuration`<sup>Required</sup> <a name="CertificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```csharp
public string CertificateAuthorityMaxValidityDuration { get; }
```

- *Type:* string

---

##### `LeafCertificateMaxValidityDuration`<sup>Required</sup> <a name="LeafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```csharp
public string LeafCertificateMaxValidityDuration { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```csharp
public string ObjectStorageBucketName { get; }
```

- *Type:* string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```csharp
public string ObjectStorageNamespace { get; }
```

- *Type:* string

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```csharp
public string ObjectStorageObjectNameFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomFormattedUrls`<sup>Required</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```csharp
public string[] CustomFormattedUrls { get; }
```

- *Type:* string[]

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList ObjectStorageConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion">DataOciCertificatesManagementCertificateAuthorityCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; }
```

- *Type:* string

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```csharp
public string IssuerCaVersionNumber { get; }
```

- *Type:* string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList RevocationStatus { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersion InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion">DataOciCertificatesManagementCertificateAuthorityCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```csharp
public string RevocationReason { get; }
```

- *Type:* string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```csharp
public string TimeOfRevocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritySubjectList <a name="DataOciCertificatesManagementCertificateAuthoritySubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritySubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get"></a>

```csharp
private DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject">DataOciCertificatesManagementCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```csharp
public DataOciCertificatesManagementCertificateAuthoritySubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject">DataOciCertificatesManagementCertificateAuthoritySubject</a>

---



